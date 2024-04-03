import linkedin from '../../images/icons/logos/linkedin.svg'
import github from '../../images/icons/white/github.svg'
import './social-icons-row.css'
import LinkedIcon from './LinkedIcon'

function SocialIconsRow({
    analyticsSource,
    className,
}: {
    analyticsSource: string
    className?: string
}) {
    // const size = 30
    return (
        <div
            className={'social-icons-container ' + (className ? className : '')}
        >
            <LinkedIcon
                image={linkedin}
                link={'https://linkedin.com/in/ellek'}
                hoverText={'LinkedIn'}
                className={'right-padding left-padding'}
                hoverBorder={true}
                analyticsSource={analyticsSource + ' social icons row'}
                // size={size}
            />
            <LinkedIcon
                image={github}
                link={'https://github.com/elleklinton'}
                hoverText={'GitHub'}
                className={'social-icons-container'}
                hoverBorder={true}
                analyticsSource={analyticsSource + ' social icons row'}
                // size={size}
            />
            {/*<SocialIcon*/}
            {/*    img={facebook}*/}
            {/*    link={'https://facebook.com/elleklinton'}*/}
            {/*    hoverText={'Facebook'}*/}
            {/*    className={'social-icons-container'}*/}
            {/*/>*/}
            {/*<SocialIcon*/}
            {/*    img={instagram}*/}
            {/*    link={'https://instagram.com/ellek.linton'}*/}
            {/*    hoverText={'Instagram'}*/}
            {/*    className={'social-icons-container'}*/}
            {/*/>*/}
        </div>
    )
}

export default SocialIconsRow
