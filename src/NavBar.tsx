import React, { useEffect, useState } from 'react'
import './NavBar.css'

const sections = ['home', 'about', 'projects', 'resume', 'contact']

function getNavBarHeight() {
    return parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
            '--navbar-height'
        ) ?? 0
    )
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
    while (i < sections.length) {
        const sectionName = sections[i]
        const sectionButtonName = sectionName + '-nav-button'
        const sectionButton = document.getElementById(sectionButtonName)
        const sectionBounds = sectionButton!.getBoundingClientRect()
        const padding = sectionName === sections[0] ? 0 : getNavBarLeftPadding()
        sectionStarts.push((sectionBounds.x + padding) / window.innerWidth)
        i++
    }

    const indexOfSection = sections.indexOf(sectionName)
    if (indexOfSection === sections.length - 1) {
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
    while (i < sections.length) {
        const section = document.getElementById(sections[i])
        const currSectionHeight = section!.getBoundingClientRect().height
        if (sections[i] === sectionName) {
            const currentScroll = window.scrollY
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
    const { start: sectionStart, end: sectionEnd } =
        percentageXBinForSection(sectionName)
    const sectionPct = calculatePercentageWithinSection(sectionName)
    const sectionRange = sectionEnd - sectionStart
    return sectionStart + sectionPct * sectionRange
}

const onScroll = (
    navbarRef: React.MutableRefObject<HTMLDivElement | null>,
    setActiveSection: (a: string) => void
) => {
    let active = 'home'
    sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (
            section &&
            window.scrollY >= getOffsetTop(section) - getNavBarHeight()
        ) {
            active = sectionId
        }
    })

    setActiveSection(active)
    if (navbarRef.current)
        setNavBarHeight(`${navbarRef.current.clientHeight}px`, active)

    // const totalScrollHeight = document.body.scrollHeight - window.innerHeight;
    // const scrollPosition = window.scrollY;
    // const scrollPercentage = (scrollPosition / totalScrollHeight) * 100;
    const navbarLine = document.getElementById('navbar-line')
    const pctComplete = calculateProgressPct(active).toFixed(2)
    if (navbarLine) navbarLine.style.width = `${pctComplete}%`
}

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('home')
    const navbarRef = React.createRef<HTMLDivElement>()

    // Set scroll listener
    useEffect(() => {
        window.addEventListener('scroll', () =>
            onScroll(navbarRef, setActiveSection)
        )
        return () => {
            window.removeEventListener('scroll', () =>
                onScroll(navbarRef, setActiveSection)
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

    return (
        <div className="NavBar" ref={navbarRef}>
            <div
                id={'home-nav-button'}
                className={`title ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
            >
                Ellek Linton
            </div>
            <div className="navbar-sections">
                {sections
                    .filter((section) => section !== 'home')
                    .map((section) => (
                        <div
                            key={section}
                            id={section + '-nav-button'}
                            className={`navbar-section-title ${
                                activeSection === section ? 'active' : ''
                            }`}
                            onClick={() => scrollToSection(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </div>
                    ))}
            </div>
            <div className="navbar-progress-line" id="navbar-line" />
        </div>
    )
}

export default NavBar
export { scrollToSection, scrollToProject, getNavBarHeight }
