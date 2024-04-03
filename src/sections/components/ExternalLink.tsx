import React from 'react'
import { sendAnalyticsEvent, TAnalyticsEventAction } from '../../analytics'

export function ExternalLink({
    href,
    analyticsLabel,
    analyticsAction = 'Clicked on External Link',
    className = undefined,
    children,
}: {
    href: string
    analyticsLabel: string
    analyticsAction?: TAnalyticsEventAction
    className?: string
    children: string
}) {
    return (
        <a
            className={className}
            onClick={() => {
                sendAnalyticsEvent({
                    category: 'Button Click',
                    action: analyticsAction,
                    label: analyticsLabel,
                })
            }}
            rel={'noopener noreferrer'}
            target="_blank"
            href={href}
        >
            {children}
        </a>
    )
}
