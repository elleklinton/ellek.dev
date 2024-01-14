import { CSSProperties, useEffect, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import './background.css'
import { getNavBarHeight } from '../../NavBar'
// import lava from '../../images/lava/lava_1_vertical.jpg'
import lava from '../../images/lava/lava_4_vertical.jpg'
// import lava from '../../images/lava/lava_9_vertical.jpg'
// import lava from '../../images/lava/lava_10_vertical.jpg'

const BACKGROUND_IMAGE = lava

function totalScrollHeight() {
    const body = document.body
    const html = document.documentElement

    return Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    )
}

function windowHeight() {
    return window.innerHeight
}

function currentScrollProgress() {
    return window.scrollY / (totalScrollHeight() - windowHeight())
}

function handleScroll(
    startOffsetY: number,
    endOffsetY: number,
    setOffsetY: (i: number) => void
) {
    // For mobile devices that aren't tall enough to support parallax
    if (endOffsetY >= startOffsetY) {
        return
    }
    const scrollProgress = currentScrollProgress()
    const offsetRange = endOffsetY - startOffsetY
    const offsetY = startOffsetY + offsetRange * scrollProgress
    setOffsetY(offsetY)
}

function Background({
    overlayOpacity = 0.2,
    style = {},
}: {
    overlayOpacity?: number
    style?: CSSProperties
}) {
    const [startOffsetY, setStartOffsetY] = useState(88)
    const [endOffsetY, setEndOffsetY] = useState(88)
    const [offsetY, setOffsetY] = useState(startOffsetY)

    // Initialize start and end offsets
    useEffect(() => {
        // Set start offset to navbar height
        setStartOffsetY(getNavBarHeight())

        // Set image height
        const img = new Image()
        img.onload = () => {
            const displayedImageHeight =
                window.innerWidth * (img.height / img.width)

            // Set end offset to image height
            setEndOffsetY(
                startOffsetY - (displayedImageHeight - windowHeight())
            )
        }
        img.src = BACKGROUND_IMAGE
    }, [])

    const scrollHandler = () =>
        handleScroll(startOffsetY, endOffsetY, setOffsetY)

    // Initialize scroll listener
    useEffect(() => {
        // Add scroll listener
        window.addEventListener('scroll', scrollHandler)

        return () => window.removeEventListener('scroll', scrollHandler)
    }, [startOffsetY, endOffsetY])

    return (
        <Parallax className="background-image-parallax-container" style={style}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url('${BACKGROUND_IMAGE}')`,
                    backgroundPositionY: `${offsetY}px`,
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

export { currentScrollProgress, BACKGROUND_IMAGE }
