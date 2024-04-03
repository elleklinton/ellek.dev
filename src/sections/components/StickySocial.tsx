import linkedin from '../../images/icons/logos/linkedin.svg'
import github from '../../images/icons/white/github.svg'

import './sticky-social.css'
import { useEffect, useRef, useState } from 'react'
import SocialIcon from './SocialIcon'

function StickySocialVertical({ activeSection }: { activeSection: string }) {
    const ref = useRef<HTMLDivElement>(null)
    let [isHidden, setIsHidden] = useState<boolean>(true)
    const selfWidth = ref.current?.getBoundingClientRect().width ?? 100

    useEffect(() => {
        if (ref.current) {
            setIsHidden(
                !!(selfWidth && ['home', 'contact'].includes(activeSection))
            )
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
                <SocialIcon
                    img={linkedin}
                    link={'https://linkedin.com/in/ellek'}
                    hoverText={'LinkedIn'}
                    analyticsSource={'sticky social'}
                />
                <SocialIcon
                    img={github}
                    link={'https://github.com/elleklinton'}
                    hoverText={'GitHub'}
                    analyticsSource={'sticky social'}
                />
                {/*<SocialIcon*/}
                {/*    img={facebook}*/}
                {/*    link={'https://facebook.com/elleklinton'}*/}
                {/*    hoverText={'Facebook'}*/}
                {/*/>*/}
                {/*<SocialIcon*/}
                {/*    img={instagram}*/}
                {/*    link={'https://instagram.com/ellek.linton'}*/}
                {/*    hoverText={'Instagram'}*/}
                {/*/>*/}
            </div>
        </div>
    )
}

export default StickySocialVertical
