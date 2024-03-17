import React from 'react'

export type TTimelineEventPaneContainer = {
    children: any
}

export function TimelineEventPaneContainer({
    children,
}: TTimelineEventPaneContainer) {
    return (
        <div>
            <div className="line" style={{ width: '100%', marginBottom: 20 }} />
            <div className={'timeline-element-content-split-pane'}>
                {children}
            </div>
        </div>
    )
}
