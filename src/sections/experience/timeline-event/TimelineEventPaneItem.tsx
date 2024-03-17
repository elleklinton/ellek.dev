import React, { useEffect } from 'react'

export type TTimelineEventPaneItem = {
    name: string
    icon: string
    hoverText?: string | undefined
    quantity?: number | undefined
}

export function TimelineEventPaneItem({
    name,
    icon,
    hoverText = undefined,
    quantity = undefined,
}: TTimelineEventPaneItem) {
    const [isHovered, setIsHovered] = React.useState(false)
    const [hoverTextHeight, setHoverTextHeight] = React.useState(0)
    const hoverRef = React.useRef<HTMLDivElement>(null)
    const containerRef = React.useRef<HTMLLIElement>(null)

    useEffect(() => {
        if (isHovered && hoverRef.current) {
            setHoverTextHeight(hoverRef.current.getBoundingClientRect().height)
        }
    }, [isHovered, hoverRef.current])

    // const hoverTextHeight =
    //     hoverRef.current?.getBoundingClientRect().height ?? 0
    const containerHeight =
        containerRef.current?.getBoundingClientRect().height ?? 0

    const hoverMarginTop =
        -containerHeight - (containerHeight - hoverTextHeight) / 2
    const hoverMarginLeft =
        containerRef.current?.getBoundingClientRect().width ?? 0

    return (
        <li
            className={'tooltip'}
            ref={containerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a
                style={{
                    whiteSpace: 'nowrap',
                }}
                // style={{
                //     fontWeight: isHovered
                //         ? 'var(--font-weight-semibold)'
                //         : undefined,
                // }}
            >
                {(quantity ? `${quantity} ` : '') + name + '  '}
            </a>
            <img
                src={icon}
                style={{
                    width: '25px',
                    height: '100%',
                    display: 'inline',
                    verticalAlign: 'middle',
                }}
                alt={name + ' icon'}
                // title={hoverText}
            />
            {hoverText && <div className={'tooltiptext'}>...{hoverText}</div>}
            {/*{isHovered && hoverText !== undefined && (*/}
            {/*    <div style={{ maxWidth: '100%' }}>*/}
            {/*        <a style={{ fontStyle: 'italic', fontSize: '1rem' }}>*/}
            {/*            ...{hoverText}*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*    // <div*/}
            {/*    //     ref={hoverRef}*/}
            {/*    //     className="timeline-element-content-award-hover-text"*/}
            {/*    //     style={{*/}
            {/*    //         marginTop: hoverMarginTop,*/}
            {/*    //         marginLeft: hoverMarginLeft,*/}
            {/*    //     }}*/}
            {/*    // >*/}
            {/*    //     {hoverText}*/}
            {/*    // </div>*/}
            {/*)}*/}
        </li>
    )
}
