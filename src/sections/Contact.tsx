import React from 'react'
import './section.css'
import './contact.css'
import email_img from '../images/icons/white/email.svg'
import { Parallax } from 'react-scroll-parallax'
import SectionTitle from './components/section-title'

function ContactMethod({
    title,
    value,
    href,
    logo,
}: {
    title: string
    value: string
    href: string
    logo: any
}) {
    return (
        <div className="contact-method-container">
            <img src={logo} className="contact-method-logo" />
            <p className="contact-title">{title}</p>
            <a href={href} className="contact-value">
                {value}
            </a>
        </div>
    )
}

function Contact() {
    return (
        <div className="content-section" id="about">
            <div className="content-container">
                <div className="line" />
                <SectionTitle sectionName="contact">Contact</SectionTitle>
                <div className="line" />
                <div className="top-padding bottom-padding">
                    <p>
                        <ContactMethod
                            title={'Email'}
                            value={'ellek@ellek.dev'}
                            logo={email_img}
                            href={'mailto:ellek@ellek.dev'}
                        />
                    </p>
                </div>
            </div>
            {/*</Parallax>*/}
        </div>
    )
}

export default Contact
