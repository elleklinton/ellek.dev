import React from 'react'
import './section.css'
import me_img from '../images/me.jpg'
import { Parallax } from 'react-scroll-parallax'
import SectionTitle from './components/section-title'

function Footer() {
    return (
        <div className="content-section" id="about">
            <div className="content-container">
                <SectionTitle sectionName="footer">
                    <div className="line" />
                    <div className="top-padding">
                        <p>
                            Thanks for checking out my website!
                            <br />
                            <br />
                            Made with love ❤️️by Ellek Linton
                            <br />
                            <br />
                            <br />
                            <br />
                            <p style={{ fontStyle: 'italic' }}>
                                © Copyright Ellek Linton 2024
                            </p>
                            <br />
                            <br />
                        </p>
                    </div>
                </SectionTitle>
            </div>
        </div>
    )
}

export default Footer
