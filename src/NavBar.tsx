import React, { CSSProperties, useEffect, useState } from 'react'
import './NavBar.css'
import { isMobile } from './utils'
import NavBarSectionsMobile from './NavBarSectionsMobile'
import { NavBarSections } from './NavBarSections'
import { HamburgerMenu } from './HamburgerMenu'
import { currentScrollProgress } from './sections/components/Background'

const NAVBAR_SECTIONS = ['home', 'about', 'projects', 'resume', 'contact']

function getNavBarHeight() {
    return parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
            '--navbar-height'
        ) ?? 0
    )
}

function currentScrollPosition() {
    if (window.scrollY < window.innerHeight / 2) {
        return window.scrollY * 2
    }
    return window.scrollY - getNavBarHeight() + window.innerHeight / 2
}

function getNavBarLeftPadding(): number {
    return parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
            '--navbar-padding-right-left'
        ) ?? 0
    )
}

function setNavBarHeight(height: string, activeSection: string): void {
    document.documentElement.style.setProperty('--navbar-height', height)
}
function getOffsetTop(element: Element | null) {
    let offsetTop = 0
    while (element) {
        offsetTop += (element as HTMLElement).offsetTop
        element = (element as HTMLElement).offsetParent
    }
    return offsetTop
}

function getOffsetBottom(element: Element | null) {
    let offsetBottom = (element as HTMLElement).offsetHeight
    while (element) {
        offsetBottom += (element as HTMLElement).offsetTop

        element = (element as HTMLElement).offsetParent
    }
    return offsetBottom
}

function getOffsetRight(element: Element | null) {
    const offsetRight = 0
    while (element) {
        // offsetRight += (element as HTMLElement).offsetLeft + (element as HTMLElement).offsetWidth;
        element = (element as HTMLElement).offsetParent
    }
    return offsetRight
}

function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId)
    if (section) {
        window.scrollTo({
            top: getOffsetTop(section) - getNavBarHeight(),
            behavior: 'smooth',
        })
    }
}

function scrollToProject(projectId: string) {
    const project = document.getElementById(projectId)
    if (project) {
        window.scrollTo({
            top: getOffsetTop(project) - getNavBarHeight(),
            behavior: 'smooth',
        })
    }
}

function percentageXBinForSection(sectionName: string): {
    start: number
    end: number
} {
    const sectionStarts = []
    let i = 0
    while (i < NAVBAR_SECTIONS.length) {
        const sectionName = NAVBAR_SECTIONS[i]
        const sectionButtonName = sectionName + '-nav-button'
        const sectionButton = document.getElementById(sectionButtonName)
        const sectionBounds = sectionButton!.getBoundingClientRect()
        const padding =
            sectionName === NAVBAR_SECTIONS[0] ? 0 : getNavBarLeftPadding()
        sectionStarts.push((sectionBounds.x + padding) / window.innerWidth)
        i++
    }

    const indexOfSection = NAVBAR_SECTIONS.indexOf(sectionName)
    if (indexOfSection === NAVBAR_SECTIONS.length - 1) {
        return { start: 100 * sectionStarts[indexOfSection], end: 120 }
    }
    return {
        start: 100 * sectionStarts[indexOfSection],
        end: 100 * sectionStarts[indexOfSection + 1],
    }
}

function calculatePercentageWithinSection(sectionName: string) {
    let previousSectionHeights = 0
    let i = 0
    while (i < NAVBAR_SECTIONS.length) {
        const section = document.getElementById(NAVBAR_SECTIONS[i])
        const currSectionHeight = section!.getBoundingClientRect().height
        if (NAVBAR_SECTIONS[i] === sectionName) {
            const currentScroll = currentScrollPosition()
            const start = previousSectionHeights
            const end = previousSectionHeights + currSectionHeight
            return (currentScroll - start) / (end - start)
        }
        previousSectionHeights += currSectionHeight
        i++
    }
    return 0
}

function calculateProgressPct(sectionName: string): number {
    if (isMobile()) {
        return currentScrollProgress() * 100
    }
    const { start: sectionStart, end: sectionEnd } =
        percentageXBinForSection(sectionName)
    const sectionPct = calculatePercentageWithinSection(sectionName)
    const sectionRange = sectionEnd - sectionStart
    return sectionStart + sectionPct * sectionRange
}

function getActiveSection(): string {
    let active = 'home'
    NAVBAR_SECTIONS.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (
            section &&
            currentScrollPosition() >= getOffsetTop(section) - getNavBarHeight()
        ) {
            active = sectionId
        }
    })
    return active
}

function updateUrl(activeSection: string) {
    const url = new URL(window.location.href)
    url.searchParams.set('section', activeSection)
    window.history.pushState({}, '', url.toString())
}

const onNavbarScroll = (
    navbarRef: React.MutableRefObject<HTMLDivElement | null>,
    setActiveSection: (a: string) => void
) => {
    const active = getActiveSection()

    setActiveSection(active)
    if (navbarRef.current)
        setNavBarHeight(`${navbarRef.current.clientHeight}px`, active)

    const navbarLine = document.getElementById('navbar-line')
    const pctComplete = calculateProgressPct(active).toFixed(2)
    if (navbarLine) navbarLine.style.width = `${pctComplete}%`
}

function NavBar({
    activeSection,
    setActiveSection,
}: {
    activeSection: string
    setActiveSection: (a: string) => void
}) {
    const navbarRef = React.createRef<HTMLDivElement>()
    const [isHamburgerActive, setIsHamburgerActive] = useState(false)

    const toggleIcon = () => {
        setIsHamburgerActive(!isHamburgerActive)
    }

    // Set scroll listener
    useEffect(() => {
        window.addEventListener('scroll', () =>
            onNavbarScroll(navbarRef, setActiveSection)
        )
        return () => {
            window.removeEventListener('scroll', () =>
                onNavbarScroll(navbarRef, setActiveSection)
            )
        }
    }, [])

    // Save navbar height
    useEffect(() => {
        if (navbarRef.current) {
            setNavBarHeight(
                `${navbarRef.current.clientHeight}px`,
                activeSection
            )
        }
    }, [navbarRef.current, navbarRef.current?.clientHeight])

    let style: CSSProperties = {
        flexDirection: isMobile() ? 'column' : 'row',
    }

    if (
        activeSection === 'resume' &&
        calculatePercentageWithinSection('resume') >= 0
    )
        style.backgroundColor = 'var(--blur-background-color-dark-severe)'

    const isProgressLineVisible = !isMobile() || !isHamburgerActive

    return (
        <div className="NavBar" ref={navbarRef} style={style}>
            <div
                className="navbar-content"
                style={{ width: isMobile() ? '100%' : undefined }}
            >
                <div
                    id={'home-nav-button'}
                    className={`title ${
                        activeSection === 'home' ? 'active' : ''
                    }`}
                    onClick={() => scrollToSection('home')}
                    style={{ fontSize: 40 }}
                >
                    Ellek Linton
                </div>
                {isMobile() && (
                    <HamburgerMenu
                        toggleIcon={toggleIcon}
                        isActive={isHamburgerActive}
                    />
                )}
            </div>

            <NavBarSections
                activeSection={activeSection}
                hamburgerVisible={isHamburgerActive}
                setHamburgerVisible={setIsHamburgerActive}
            />

            {isProgressLineVisible && (
                <div
                    className="navbar-progress-line"
                    id="navbar-line"
                    // style={{ marginTop: getNavBarHeight() }}
                />
            )}
        </div>
    )
}

export default NavBar
export {
    scrollToSection,
    scrollToProject,
    getNavBarHeight,
    setNavBarHeight,
    onNavbarScroll,
    calculatePercentageWithinSection,
    NAVBAR_SECTIONS,
}
