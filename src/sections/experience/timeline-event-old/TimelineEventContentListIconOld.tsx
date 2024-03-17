import React, { useEffect } from 'react'
import '../timeline.css'

export function TimelineEventContentListIconOld({
    itemName,
    hoverText,
    icon,
    awardsContainerRef,
}: {
    itemName: string
    hoverText: string
    icon: string
    awardsContainerRef: React.MutableRefObject<any>
}) {
    const hoverRef = React.useRef(null)
    const [isHoverActive, setIsHoverActive] = React.useState(false)
    const [hoverTextHeight, setHoverTextHeight] = React.useState(0)
    const [hoverTextMarginLeft, setHoverTextMarginLeft] = React.useState(0)

    useEffect(() => {
        if (isHoverActive && hoverRef.current) {
            const hoverTextRect = (
                hoverRef.current as HTMLElement
            ).getBoundingClientRect()
            setHoverTextHeight(hoverTextRect.height)
            setHoverTextMarginLeft(
                awardsContainerRef.current!.getBoundingClientRect().width
            )
        }
    }, [isHoverActive])

    return (
        <div style={{}}>
            {itemName + ' '}
            <div
                style={{ whiteSpace: 'nowrap', display: 'inline' }}
                onMouseEnter={() => setIsHoverActive(true)}
                onMouseLeave={() => setIsHoverActive(false)}
            >
                <img
                    src={icon}
                    style={{
                        width: '1em',
                        height: '100%',
                        // marginLeft: '10px',
                        border: 0,
                        verticalAlign: 'middle',
                    }}
                />
            </div>
            <div>
                {isHoverActive && (
                    <div
                        ref={hoverRef}
                        className="timeline-element-content-award-hover-text"
                        style={{
                            marginTop: -hoverTextHeight / 2,
                            marginLeft: hoverTextMarginLeft,
                        }}
                    >
                        <div style={{ fontWeight: 500, display: 'inline' }}>
                            {itemName}
                        </div>
                        {' ' + hoverText}
                    </div>
                )}
            </div>
        </div>
    )
}
