import './LinkedIcon.css'
import { CSSProperties, useState } from 'react'

function LinkedIcon({
    image,
    link,
    hoverText,
    className,
    style,
    hoverBorder = true,
    hoverBackground = true,
    size = 25,
}: {
    image: string
    link: string
    hoverText: string
    className?: string
    style?: CSSProperties
    hoverBorder?: boolean
    hoverBackground?: boolean
    size?: number
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
            style={{
                ...style,
                // height: dim,
                // width: dim,
            }}
        >
            <img src={image} className="link-button-image" />
        </a>
    )
}

export default LinkedIcon
