import { CSSProperties, useEffect, useState } from 'react'
import { Parallax } from 'react-scroll-parallax'
import './background.css'
import { getNavBarHeight } from '../../NavBar'
import lava from '../../images/lava/lava_1_vertical.jpg'
// import lava from '../../images/lava/lava_4_vertical.jpg'
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

function windowWidth() {
    return window.innerWidth
}

function currentScrollProgress() {
    return window.scrollY / (totalScrollHeight() - windowHeight())
}

function handleScroll(
    startOffsetY: number,
    endOffsetY: number,
    setOffsetY: (i: number) => void,
    hasNavBar: boolean
) {
    if (!hasNavBar) {
        setOffsetY(0)
        return
    }
    // For mobile devices that aren't tall enough to support parallax
    if (endOffsetY >= startOffsetY) {
        return
    }
    const scrollProgress = currentScrollProgress()
    const offsetRange = endOffsetY - startOffsetY
    const offsetY = startOffsetY + offsetRange * scrollProgress
    setOffsetY(offsetY)
}

function updateImageOffsets(
    hasNavBar: boolean,
    startOffsetY: number,
    setStartOffsetY: (i: number) => void,
    setEndOffsetY: (i: number) => void,
    setBackgroundSize: (i: string) => void
) {
    // Set start offset to navbar height
    if (hasNavBar) {
        setStartOffsetY(getNavBarHeight())
    } else {
        setStartOffsetY(0)
    }

    // Set image height
    const img = new Image()
    img.onload = () => {
        // Check if window is wider than image
        if (windowWidth() > img.width) {
            // Set image to cover screen and compute new endOffsetYs
            setBackgroundSize('cover')
            const newImageHeight = window.innerWidth * (img.height / img.width)
            setEndOffsetY(startOffsetY - (newImageHeight - windowHeight()))
        } else {
            setBackgroundSize('auto')
            // Set end offset to image height
            setEndOffsetY(startOffsetY - (img.height - windowHeight()))
        }
    }
    img.src = BACKGROUND_IMAGE
}

function Background({
    overlayOpacity = 0.7,
    style = {},
    hasNavBar = true,
}: {
    overlayOpacity?: number
    style?: CSSProperties
    hasNavBar?: boolean
}) {
    const [backgroundSize, setBackgroundSize] = useState('auto')
    const [startOffsetY, setStartOffsetY] = useState(hasNavBar ? 88 : 0)
    const [endOffsetY, setEndOffsetY] = useState(88)
    const [offsetY, setOffsetY] = useState(startOffsetY)

    // Initialize start and end offsets
    useEffect(() => {
        updateImageOffsets(
            hasNavBar,
            startOffsetY,
            setStartOffsetY,
            setEndOffsetY,
            setBackgroundSize
        )
    }, [windowHeight()])

    const scrollHandler = () =>
        handleScroll(startOffsetY, endOffsetY, setOffsetY, hasNavBar)

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
                    backgroundSize: backgroundSize,
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
