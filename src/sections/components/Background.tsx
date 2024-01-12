import { CSSProperties, useEffect, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import './background.css'

function Background({
    image,
    overlayOpacity = 0.2,
    style = {},
}: {
    image: any
    overlayOpacity?: number
    style?: CSSProperties
}) {
    const [offsetY, setOffsetY] = useState(0)
    const [imageHeight, setImageHeight] = useState(0)

    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const parallaxSpeedFactor = 0.25
        const offsetY = scrollPosition * parallaxSpeedFactor
        setOffsetY(offsetY)
    }

    useEffect(() => {
        const img = new Image()
        img.onload = () => {
            const displayedImageHeight =
                window.innerWidth * (img.height / img.width)
            setImageHeight(displayedImageHeight)
        }
        img.src = image

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [image])

    const maxOffset = imageHeight - window.innerHeight
    const offsetMultiplier = Math.min(offsetY, maxOffset)

    return (
        <Parallax className="background-image-parallax-container" style={style}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url('${image}')`,
                    backgroundPosition: `center -${offsetMultiplier}px`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div
                    className="background-image-overlay"
                    style={{
                        background: `rgba(0, 0, 0, ${overlayOpacity})`,
                    }}
                />
            </div>
        </Parallax>
    )
}

export default Background
