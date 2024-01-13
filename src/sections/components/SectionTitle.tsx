import React from 'react'
import { scrollToSection } from '../../NavBar'

function SectionTitle({
    sectionName,
    children,
}: {
    sectionName: string
    children: any
}) {
    return (
        <h1
            className="section-title"
            onClick={() => {
                scrollToSection(sectionName)
            }}
        >
            {children}
        </h1>
    )
}

export default SectionTitle
