import React, { CSSProperties } from 'react'
import { scrollToSection } from '../../NavBar'

function SectionTitle({
    sectionName,
    children,
    style,
}: {
    sectionName: string
    children: any
    style?: CSSProperties
}) {
    return (
        <h1
            className="section-title"
            style={style}
            onClick={() => {
                scrollToSection(sectionName)
            }}
        >
            {children}
        </h1>
    )
}

export default SectionTitle
