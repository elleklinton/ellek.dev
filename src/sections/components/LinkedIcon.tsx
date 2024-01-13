import './LinkedIcon.css'
import { CSSProperties } from 'react'

function LinkedIcon({
    image,
    link,
    hoverText,
    className,
    style,
}: {
    image: string
    link: string
    hoverText: string
    className?: string
    style?: CSSProperties
}) {
    return (
        <a
            className={'link-button' + (className ? ' ' + className : '')}
            target="_blank"
            rel="noopener noreferrer"
            title={hoverText}
            href={link}
            style={style}
        >
            <img src={image} className="link-button-image" />
        </a>
    )
}

export default LinkedIcon
