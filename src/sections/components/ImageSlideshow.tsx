import React from 'react'
import './ImageSlideshow.css'

function SlideshowTextStep({
    text,
    index,
    isActive,
    setCurrImage,
}: {
    text: string
    index: number
    isActive: boolean
    setCurrImage: (index: number) => void
}) {
    return (
        <div
            onClick={() => {
                setCurrImage(index)
            }}
        >
            <p className={`slideshow-text-step ${isActive ? 'active' : ''}`}>
                {text}
            </p>
        </div>
    )
}

export function ImageSlideshow({
    images,
    descriptions,
    currImage,
    setCurrImage,
}: {
    images: string[]
    descriptions: string[]
    currImage: any
    setCurrImage: (index: number) => void
}) {
    // Update the current image every 3 seconds
    React.useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currImage + 1) % images.length
            setCurrImage(nextIndex)
        }, 3000)
        return () => clearInterval(interval)
    }, [currImage])

    return (
        <div className="slideshow-image-container">
            <img
                src={images[currImage]}
                className="slideshow-image"
                alt="Baus Playlist Maker"
            />
            <div className="slideshow-text-container">
                {descriptions.map((text, index) => (
                    <SlideshowTextStep
                        key={text}
                        text={text}
                        index={index}
                        isActive={index === currImage}
                        setCurrImage={setCurrImage}
                    />
                ))}
            </div>
        </div>
    )
}
