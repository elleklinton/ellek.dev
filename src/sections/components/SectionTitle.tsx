import React, { CSSProperties } from 'react'
import { scrollTo } from '../../NavBar'

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
                scrollTo(sectionName)
            }}
        >
            {children}
        </h1>
    )
}

export default SectionTitle
