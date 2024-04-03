import React from 'react'
import './components/content-section.css'
import './contact.css'
import email_img from '../images/icons/white/email.svg'
import phone_img from '../images/icons/white/phone.svg'
import { ContentSection } from './components/ContentSection'
import SocialIconsRow from './components/SocialIconsRow'
import { ExternalLink } from './components/ExternalLink'

function ContactMethod({
    title,
    value,
    href,
    logo,
    className,
}: {
    title: string
    value: string
    href: string
    logo: any
    className?: string
}) {
    return (
        <div
            className={
                'contact-method-container' + (className ? ' ' + className : '')
            }
        >
            <img src={logo} className="contact-method-logo" />
            <p className="contact-title">{title}</p>
            <ExternalLink
                analyticsAction={'Clicked on Contact Link'}
                analyticsLabel={title}
                href={href}
                className="contact-value"
            >
                {value}
            </ExternalLink>
        </div>
    )
}

function Contact() {
    return (
        <ContentSection id={'contact'} title={'Contact'}>
            <div>
                <ContactMethod
                    title={'Email'}
                    value={'ellek@ellek.dev'}
                    logo={email_img}
                    href={'mailto:ellek@ellek.dev'}
                />
                <ContactMethod
                    title={'Phone'}
                    value={'(801) 999-0602'}
                    logo={phone_img}
                    href={'tel:8019990602'}
                    className={'top-padding'}
                />
            </div>
            <SocialIconsRow
                analyticsSource={'contact'}
                className={'top-padding'}
            />
        </ContentSection>
    )
}

export default Contact
