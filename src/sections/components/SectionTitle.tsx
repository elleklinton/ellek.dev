import React, { CSSProperties } from 'react'
import { scrollTo } from '../../NavBar'

function SectionTitle({
    sectionName,
    children,
    style,
    href,
    blockClicks = true,
}: {
    sectionName: string
    children: any
    style?: CSSProperties
    href?: string
    blockClicks?: boolean
}) {
    const includeHref = typeof children === 'string'
    return (
        <h1
            className="section-title"
            style={style}
            onClick={(e) => {
                if (blockClicks) {
                    e.preventDefault()
                    scrollTo(sectionName)
                }
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
