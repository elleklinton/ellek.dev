import React, { CSSProperties } from 'react'
import { scrollTo } from '../../NavBar'

function SectionTitle({
    sectionName,
    children,
    style,
    href,
}: {
    sectionName: string
    children: any
    style?: CSSProperties
    href?: string
}) {
    const includeHref = typeof children === 'string'
    return (
        <h1
            className="section-title"
            style={style}
            onClick={(e) => {
                e.preventDefault()
                scrollTo(sectionName)
            }}
        >
            {includeHref ? (
                <a
                    style={{ color: 'white', textDecoration: 'none' }}
                    href={href}
                >
                    {children}
                </a>
            ) : (
                children
            )}
        </h1>
    )
}

export default SectionTitle
