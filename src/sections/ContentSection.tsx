import SectionTitle from './components/SectionTitle'
import React from 'react'
import './content-section.css'

export function ContentSection({
    id,
    title,
    children,
}: {
    id: string
    title: any
    children?: any
}) {
    return (
        <div className="content-section" id={id}>
            <div className="content-container">
                <div className="line" />
                <SectionTitle sectionName={id}>{title}</SectionTitle>
                <div className="line" />
                <div className="top-padding bottom-padding">{children}</div>
            </div>
        </div>
    )
}
