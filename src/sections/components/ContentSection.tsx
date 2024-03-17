import SectionTitle from './SectionTitle'
import React, { CSSProperties } from 'react'
import './content-section.css'

export function ContentSection({
    id,
    title,
    children,
    style,
}: {
    id: string
    title: any
    children?: any
    style?: CSSProperties
}) {
    return (
        <div className="content-section" id={id}>
            <div className="content-container">
                <div className="line" />
                <SectionTitle sectionName={id} href={`/${id}`}>
                    {title}
                </SectionTitle>
                <div className="line" />
                <div className="top-padding bottom-padding" style={style}>
                    {children}
                </div>
            </div>
        </div>
    )
}
