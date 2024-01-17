import React from 'react'
import './components/content-section.css'
import SectionTitle from './components/SectionTitle'
import './footer.css'

function Footer() {
    return (
        <div className="content-section" id="about">
            <div className="content-container">
                <div className={'line'} />
                <SectionTitle sectionName="footer" style={{ cursor: 'unset' }}>
                    <div className="top-padding">
                        <div>
                            Thanks for checking out my website!
                            <br />
                            <br />
                            Made with ❤️️ by Ellek Linton
                            <br />
                            <br />
                            <br />
                            <br />
                            <a></a>
                            <div
                                style={{ fontStyle: 'italic' }}
                                className={'small-text'}
                            >
                                Background Image:{' '}
                                <a
                                    href="https://www.adidizdarevic.com/project/ominous-anxious"
                                    target={'_blank'}
                                >
                                    Adi Dizdarevic
                                </a>
                                <br />© Copyright Ellek Linton 2024
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </SectionTitle>
            </div>
        </div>
    )
}

export default Footer
