import React from 'react'
import './content-section.css'
import SectionTitle from './components/SectionTitle'

function Footer() {
    return (
        <div className="content-section" id="about">
            <div className="content-container">
                <div className="line" />
                <SectionTitle sectionName="footer">
                    <div className="top-padding">
                        <p>
                            Thanks for checking out my website!
                            <br />
                            <br />
                            Made with ❤️️ by Ellek Linton
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
