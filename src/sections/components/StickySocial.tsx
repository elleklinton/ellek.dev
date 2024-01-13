import linkedin from '../../images/icons/logos/linkedin.svg'
import github from '../../images/icons/white/github.svg'
import facebook from '../../images/icons/logos/facebook.svg'
import instagram from '../../images/icons/logos/instagram.svg'

import './sticky-social.css'
import LinkedIcon from './LinkedIcon'
import { CSSProperties, useEffect, useRef, useState } from 'react'

function StickySocialIcon({
    img,
    link,
    hoverText,
    className,
}: {
    img: any
    link: string
    hoverText: string
    className?: string
}) {
    const iconStyle: CSSProperties = { margin: 0 }
    return (
        <LinkedIcon
            className={
                'sticky-social-button' + (className ? ' ' + className : '')
            }
            image={img}
            link={link}
            hoverText={hoverText}
            style={iconStyle}
        />
    )
}

function StickySocialVertical({ activeSection }: { activeSection: string }) {
    const ref = useRef<HTMLDivElement>(null)
    let [isHidden, setIsHidden] = useState<boolean>(true)
    const selfWidth = ref.current?.getBoundingClientRect().width ?? 100

    useEffect(() => {
        if (ref.current) {
            setIsHidden(!!(selfWidth && activeSection === 'home'))
        }
    }, [activeSection, ref.current])

    const marginRight = isHidden ? selfWidth * -1 : 0

    return (
        <div
            ref={ref}
            className="sticky-social-container-outer"
            style={{ marginRight }}
        >
            <div className={'sticky-social-container'}>
                <StickySocialIcon
                    img={linkedin}
                    link={'https://linkedin.com/in/ellek'}
                    hoverText={'LinkedIn'}
                />
                <StickySocialIcon
                    img={github}
                    link={'https://github.com/elleklinton'}
                    hoverText={'GitHub'}
                />
                <StickySocialIcon
                    img={facebook}
                    link={'https://facebook.com/elleklinton'}
                    hoverText={'Facebook'}
                />
                <StickySocialIcon
                    img={instagram}
                    link={'https://instagram.com/ellek.linton'}
                    hoverText={'Instagram'}
                />
            </div>
        </div>
    )
}

export default StickySocialVertical

export { StickySocialIcon }
