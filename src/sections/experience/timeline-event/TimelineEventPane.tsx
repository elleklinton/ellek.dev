import React from 'react'

export type TTimelineEventPane = {
    title: string
    children: React.ReactNode[] | React.ReactNode
}

export function TimelineEventPane({ title, children }: TTimelineEventPane) {
    return (
        <div style={{ textAlign: 'center', flex: 1 }}>
            <h4 className={'timeline-element-content-split-pane-title'}>
                {title}
            </h4>
            <ul>{children}</ul>
        </div>
    )
}
