import React from 'react'
import { scrollTo } from './NavBar'
import './nav-bar-sections-desktop.css'
import './hamburger-menu.css'
import { isMobile } from './utils'
import NAVBAR_SECTIONS from './navbar-sections'

export function sectionToUppercase(section: string) {
    return section.charAt(0).toUpperCase() + section.slice(1)
}

export function NavBarSections({
    activeSection,
    hamburgerVisible,
    setHamburgerVisible,
}: {
    activeSection: string
    hamburgerVisible: boolean
    setHamburgerVisible: (visible: boolean) => void
}) {
    return (
        <div
            className="navbar-sections"
            style={{
                flexDirection: isMobile() ? 'column' : 'row',
                maxHeight: isMobile()
                    ? hamburgerVisible
                        ? '500px'
                        : '0px'
                    : undefined,
                overflow: 'hidden',
            }}
        >
            {NAVBAR_SECTIONS.filter((section) => section !== 'home').map(
                (section) => (
                    <div key={section}>
                        {isMobile() && <div className="line" />}
                        <div
                            key={section}
                            id={section + '-nav-button'}
                            className={`navbar-section-title ${
                                activeSection === section ? 'active' : ''
                            }`}
                            onClick={() => {
                                setHamburgerVisible(false)
                                scrollTo(section)
                            }}
                        >
                            {sectionToUppercase(section)}
                        </div>
                    </div>
                )
            )}
            {isMobile() && <div className="line" />}
        </div>
    )
}
