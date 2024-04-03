import ReactGA from 'react-ga'

export type TAnalyticsEventCategory =
    | 'Button Click'
    | 'Section View'
    | 'Project View'

export type TAnalyticsEventAction =
    | 'Clicked on External Link'
    | 'Clicked on Contact Link'
    | 'Clicked on Navigation Link'
    | 'Downloaded Resume'
    | 'Viewed Section'
    | 'Viewed Project'

export function sendAnalyticsEvent({
    category,
    action,
    label,
}: {
    category: TAnalyticsEventCategory
    action: TAnalyticsEventAction | string
    label?: string
}) {
    // console.log(
    //     `[Analytics] Sending analytics event: {category=${category}, action=${action}, label=${label}}`
    // )
    ReactGA.event({
        category,
        action,
        label,
    })
}

export function sendAnalyticsPageView(
    page: string,
    isProject = false,
    pagePathOverride?: string
) {
    const pagePath =
        pagePathOverride ?? window.location.pathname + window.location.search
    ReactGA.pageview(pagePath)
    // console.log('[Analytics] Sending page view:', pagePath)

    sendAnalyticsEvent({
        category: isProject ? 'Project View' : 'Section View',
        action: 'Viewed ' + page,
        label: 'Viewed ' + page,
    })
}
