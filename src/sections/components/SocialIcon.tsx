import { CSSProperties } from 'react'
import LinkedIcon from './LinkedIcon'

function SocialIcon({
    img,
    link,
    hoverText,
    className,
    size = 25,
    hoverBorder = false,
    hoverBackground = true,
    analyticsSource,
}: {
    img: any
    link: string
    hoverText: string
    className?: string
    hoverBorder?: boolean
    hoverBackground?: boolean
    size?: number
    analyticsSource: string
}) {
    // + 2 to account for hover border so it doesn't change layout when you hover.
    const iconStyle: CSSProperties = {
        margin: 0,
        height: size + 2,
        width: size + 2,
    }
    return (
        <LinkedIcon
            className={className ? ' ' + className : ''}
            image={img}
            link={link}
            hoverText={hoverText}
            style={iconStyle}
            size={size}
            hoverBorder={hoverBorder}
            hoverBackground={hoverBackground}
            analyticsSource={analyticsSource}
        />
    )
}

export default SocialIcon
