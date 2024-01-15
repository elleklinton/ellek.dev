import React, { useState } from 'react'
import './hamburger-menu.css'
import { scrollTo } from './NavBar'
import SectionTitle from './sections/components/SectionTitle'
import NAVBAR_SECTIONS from './navbar-sections'

function NavBarSectionsMobile({ activeSection }: { activeSection: string }) {
    const [isActive, setIsActive] = useState(false)

    const toggleIcon = () => {
        setIsActive(!isActive)
    }

    return (
        <div
            className={`hamburger-icon ${isActive ? 'active' : ''}`}
            onClick={toggleIcon}
        >
            <span></span>
            <span></span>
            <span></span>
            <br />
            {isActive && (
                <div className="navbar-sections-mobile">
                    {NAVBAR_SECTIONS.filter(
                        (section) => section !== 'home'
                    ).map((section) => (
                        <div
                            key={section}
                            id={section + '-nav-button'}
                            className={`navbar-section-title ${
                                activeSection === section ? 'active' : ''
                            }`}
                            onClick={() => scrollTo(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default NavBarSectionsMobile
