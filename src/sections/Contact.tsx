import React from 'react'
import './content-section.css'
import './contact.css'
import email_img from '../images/icons/white/email.svg'
import { ContentSection } from './ContentSection'

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
            <a href={href} className="contact-value">
                {value}
            </a>
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
                    logo={email_img}
                    href={'tel:8019990602'}
                    className={'top-padding'}
                />
            </div>
        </ContentSection>
    )
}

export default Contact
