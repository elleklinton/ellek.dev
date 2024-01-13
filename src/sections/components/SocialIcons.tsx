import linkedin from '../../images/icons/logos/linkedin.svg'
import github from '../../images/icons/white/github.svg'
import facebook from '../../images/icons/logos/facebook.svg'
import instagram from '../../images/icons/logos/instagram.svg'
import { StickySocialIcon } from './StickySocial'
import './social-icons.css'

function StickySocialHorizontal() {
    return (
        <div className={'social-icons-container'}>
            <StickySocialIcon
                img={linkedin}
                link={'https://linkedin.com/in/ellek'}
                hoverText={'LinkedIn'}
                className={'social-icons-container'}
            />
            <StickySocialIcon
                img={github}
                link={'https://github.com/elleklinton'}
                hoverText={'GitHub'}
                className={'social-icons-container'}
            />
            <StickySocialIcon
                img={facebook}
                link={'https://facebook.com/elleklinton'}
                hoverText={'Facebook'}
                className={'social-icons-container'}
            />
            <StickySocialIcon
                img={instagram}
                link={'https://instagram.com/ellek.linton'}
                hoverText={'Instagram'}
                className={'social-icons-container'}
            />
        </div>
    )
}

export default StickySocialHorizontal
