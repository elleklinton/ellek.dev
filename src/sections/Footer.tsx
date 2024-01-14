import React from 'react'
import './content-section.css'
import SectionTitle from './components/SectionTitle'

function Footer() {
    return (
        <div className="content-section" id="about">
            <div className="content-container">
                <div className={'line'} />
                <SectionTitle sectionName="footer" style={{ cursor: 'unset' }}>
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
                            <a style={{ fontStyle: 'italic' }}>
                                © Copyright Ellek Linton 2024
                            </a>
                            <br />
                            <br />
                            <br />
                            <a style={{ fontStyle: 'italic' }}>
                                Background Image:{' '}
                                <a
                                    href="https://www.adidizdarevic.com/project/ominous-anxious"
                                    target={'_blank'}
                                >
                                    Adi Dizdarevic
                                </a>
                            </a>
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
