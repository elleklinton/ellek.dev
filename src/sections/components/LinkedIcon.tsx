import './LinkedIcon.css'
import { CSSProperties, useState } from 'react'
import { sendAnalyticsEvent } from '../../analytics'

function LinkedIcon({
    image,
    link,
    hoverText,
    className,
    style,
    hoverBorder = true,
    hoverBackground = true,
    size = 25,
    analyticsSource,
}: {
    image: string
    link: string
    hoverText: string
    className?: string
    style?: CSSProperties
    hoverBorder?: boolean
    hoverBackground?: boolean
    size?: number
    analyticsSource?: string
}) {
    const [isHovered, setIsHovered] = useState(false)
    function toggleHover() {
        setIsHovered(!isHovered)
    }

    const dim = size + (!isHovered ? 2 : 0)
    const baseClasses =
        'link-button ' +
        (hoverBorder ? 'with-hover-border ' : ' ') +
        (hoverBackground ? 'with-hover-background-color ' : ' ')

    return (
        <a
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            className={baseClasses + (className ? ' ' + className : '')}
            target="_blank"
            rel="noopener noreferrer"
            title={hoverText}
            href={link}
            onClick={(e) => {
                sendAnalyticsEvent({
                    category: 'Button Click',
                    action: 'Clicked on External Link',
                    label:
                        (analyticsSource ? `[${analyticsSource}] ` : '') +
                        hoverText,
                })
            }}
            style={style}
        >
            <img src={image} className="link-button-image" />
        </a>
    )
}

export default LinkedIcon
