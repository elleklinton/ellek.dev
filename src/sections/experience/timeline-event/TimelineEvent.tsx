import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { InfoLine } from '../InfoLine'
import React from 'react'
import '../timeline.css'

type TTimelineEvent = {
    position: string
    positionSubtitle?: string
    company: string
    location: string
    date: string
    icon?: any
    children: any
}

export function TimelineEvent({
    position,
    positionSubtitle,
    company,
    location,
    date,
    icon,
    children,
}: TTimelineEvent) {
    return (
        <VerticalTimelineElement
            textClassName={'timeline-element-content'}
            dateClassName={'timeline-element-date'}
            date={date}
            iconStyle={{
                background: 'white',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
            }}
            icon={icon ?? <i className="fab fa-react"></i>}
        >
            <InfoLine leftText={company} rightText={location} style={'heavy'} />
            <InfoLine
                leftText={position}
                rightText={positionSubtitle ?? ''}
                style={'italic'}
            />
            <div className="line " style={{ width: '100%', marginTop: 20 }} />
            {children}
        </VerticalTimelineElement>
    )
}
