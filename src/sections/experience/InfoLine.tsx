import React from 'react'
import './timeline.css'

export function InfoLine({
    leftText,
    rightText,
    style,
}: {
    leftText: string
    rightText: string
    style?: 'heavy' | 'italic'
}) {
    let className: string | undefined
    switch (style) {
        case 'heavy':
            className = 'info-line-heavy'
            break
        case 'italic':
            className = 'info-line-italic'
            break
        default:
            className = undefined
    }

    return (
        <div className={'info-line-container'}>
            <div className={className}>{leftText}</div>
            <div className={className}>{rightText}</div>
        </div>
    )
}
