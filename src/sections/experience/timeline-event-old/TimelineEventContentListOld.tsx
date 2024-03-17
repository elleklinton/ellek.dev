import React from 'react'
import { TimelineEventContentListIconOld } from './TimelineEventContentListIconOld'

export type TTimelineEventContentList = {
    title: string
    list: string[]
    iconMap?: { [key: string]: string }
    defaultIcon?: string
}

export function TimelineEventContentListOld({
    title,
    list,
    iconMap = {},
    defaultIcon,
}: TTimelineEventContentList) {
    return (
        <div style={{ flex: 1 }}>
            <h4 className={'timeline-element-content-split-pane-title'}>
                {title}
            </h4>
            <ul>
                {list.map((item) => {
                    const icon =
                        iconMap[item.toLowerCase()] !== undefined
                            ? iconMap[item.toLowerCase()]
                            : defaultIcon
                    return (
                        <div key={item}>
                            <li key={item}>
                                {item + '  '}
                                {/*<img*/}
                                {/*    src={icon}*/}
                                {/*    style={{*/}
                                {/*        width: '25px',*/}
                                {/*        height: '100%',*/}
                                {/*        display: 'inline',*/}
                                {/*        verticalAlign: 'middle',*/}
                                {/*    }}*/}
                                {/*    alt={item + ' icon'}*/}
                                {/*/>*/}
                            </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
