import React, { CSSProperties, useEffect, useState } from 'react'
import './NavBar.css'
import { isMobile } from './utils'
import { NavBarSections, sectionToUppercase } from './NavBarSections'
import { HamburgerMenu } from './HamburgerMenu'
import { currentScrollProgress } from './sections/components/Background'
import NAVBAR_SECTIONS, { PROJECT_SECTIONS } from './navbar-sections'

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

function scrollTo(elementId: string) {
    const element = document.getElementById(elementId)
    if (element) {
        window.scrollTo({
            top: getOffsetTop(element) - getNavBarHeight(),
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

function isElementActive(sectionId: string): boolean | null {
    const section = document.getElementById(sectionId)
    return (
        section &&
        currentScrollPosition() >= getOffsetTop(section) - getNavBarHeight()
    )
}

function getActiveProjectSection(): string | null {
    let activeSection = null
    PROJECT_SECTIONS.forEach((sectionId) => {
        if (isElementActive(sectionId)) {
            activeSection = sectionId
        }
    })
    return activeSection
}

function getActiveSection(includeProjectId = false): string {
    let activeSection = 'home'
    NAVBAR_SECTIONS.forEach((sectionId) => {
        if (isElementActive(sectionId)) {
            activeSection = sectionId
        }
    })
    if (includeProjectId && activeSection === 'projects') {
        const activeProjectSection = getActiveProjectSection()
        if (activeProjectSection) {
            activeSection += '/' + getActiveProjectSection()
        }
    }
    return activeSection
}

function updateUrlOnScroll() {
    const activeSection = getActiveSection(true)
    let targetUrl = '/'
    if (activeSection !== 'home') {
        targetUrl = `/${activeSection}`
    }

    if (window.location.pathname !== targetUrl) {
        window.history.pushState(
            null,
            `Ellek Linton - ${sectionToUppercase(activeSection)}`,
            targetUrl
        )
    }
}

function getCurrentUrlPath(): string {
    let path = window.location.pathname
    // Remove beginning and end / if they are present
    if (path.startsWith('/')) path = path.slice(1)
    if (path.endsWith('/')) path = path.slice(0, -1)
    return path
}

function updateScrollPositionFromUrlIfNeeded() {
    const currentScrollSection = getActiveSection(true)
    const sectionInUrl = getCurrentUrlPath()

    if (!sectionInUrl.includes(currentScrollSection)) {
        // We need to scroll to the section in the URL
        if (sectionInUrl.includes('projects') && sectionInUrl.includes('/')) {
            // For projects, we want to scroll to the project ID which is the last part of the path when splitted by /
            const projectId = sectionInUrl.split('/').slice(-1)[0]
            scrollTo(projectId)
            console.log(`Scrolling to Project '${projectId}'`)
        } else {
            // For non projects, they have no special subdirectory path structure
            scrollTo(sectionInUrl)
            console.log(`Scrolling to Section '${sectionInUrl}'`)
        }
    }
}

const onNavbarScroll = (
    navbarRef: React.MutableRefObject<HTMLDivElement | null>,
    setActiveSection: (a: string) => void
) => {
    const activeSection = getActiveSection()
    updateUrlOnScroll()

    setActiveSection(activeSection)
    if (navbarRef.current)
        setNavBarHeight(`${navbarRef.current.clientHeight}px`, activeSection)

    const navbarLine = document.getElementById('navbar-line')
    const pctComplete = calculateProgressPct(activeSection).toFixed(2)
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

    useEffect(() => {
        // Set scroll listener
        window.addEventListener('scroll', () =>
            onNavbarScroll(navbarRef, setActiveSection)
        )

        // Scroll to current URL if needed
        updateScrollPositionFromUrlIfNeeded()

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
                    onClick={() => scrollTo('home')}
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
    scrollTo,
    getNavBarHeight,
    setNavBarHeight,
    onNavbarScroll,
    calculatePercentageWithinSection,
}
