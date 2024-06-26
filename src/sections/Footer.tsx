import React from 'react'
import './components/content-section.css'
import SectionTitle from './components/SectionTitle'
import './footer.css'
import { ExternalLink } from './components/ExternalLink'

type TFooterLink = {
    text: string
    link: string
    linkText: string
}
function FooterLink({ text, link, linkText }: TFooterLink) {
    return (
        <div className={'small-text'}>
            {text && text + ': '}
            <ExternalLink href={link} analyticsLabel={'[footer] ' + text}>
                {linkText}
            </ExternalLink>
        </div>
    )
}

function Footer() {
    const currentYear = new Date().getFullYear().toString()
    return (
        <footer className="content-section" id="footer">
            <div className="content-container">
                <div className={'line'} />
                <SectionTitle
                    blockClicks={false}
                    sectionName="footer"
                    style={{ cursor: 'unset' }}
                >
                    <div className="top-padding">
                        <div>
                            Thanks for checking out my website!
                            <br />
                            Made with ❤️️ by Ellek Linton
                            <br />
                            <br />
                            <a></a>
                            <div
                                style={{ fontStyle: 'italic' }}
                                className={'small-text footer-links'}
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
                                <br />
                                {'© Copyright Ellek Linton ' + currentYear}
                                <br />
                                <br />
                                <ExternalLink
                                    analyticsLabel={'sitemap'}
                                    href={'/sitemap.xml'}
                                >
                                    Sitemap
                                </ExternalLink>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </SectionTitle>
            </div>
        </footer>
    )
}

export default Footer
