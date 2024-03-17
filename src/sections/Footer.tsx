import React from 'react'
import './components/content-section.css'
import SectionTitle from './components/SectionTitle'
import './footer.css'

type TFooterLink = {
    text: string
    link: string
    linkText: string
}
function FooterLink({ text, link, linkText }: TFooterLink) {
    return (
        <div className={'small-text'}>
            {text}:{' '}
            <a
                href="https://www.adidizdarevic.com/project/ominous-anxious"
                target={'_blank'}
            >
                {linkText}
            </a>
        </div>
    )
}

function Footer() {
    const currentYear = new Date().getFullYear().toString()
    return (
        <div className="content-section" id="about">
            <div className="content-container">
                <div className={'line'} />
                <SectionTitle sectionName="footer" style={{ cursor: 'unset' }}>
                    <div className="top-padding">
                        <div>
                            Thanks for checking out my website!
                            <br />
                            Made with ❤️️ by Ellek Linton
                            <br />
                            <br />
                            {/*<br />*/}
                            {/*<br />*/}
                            <a></a>
                            <div
                                style={{ fontStyle: 'italic' }}
                                className={'small-text'}
                            >
                                <FooterLink
                                    text={'Website Source Code'}
                                    link={
                                        'https://github.com/elleklinton/ellek.dev'
                                    }
                                    linkText={'GitHub'}
                                />
                                <FooterLink
                                    text={'Background Image'}
                                    link={
                                        'https://www.adidizdarevic.com/project/ominous-anxious'
                                    }
                                    linkText={'Adi Dizdarevic'}
                                />
                                <br />
                                {'© Copyright Ellek Linton ' + currentYear}
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
