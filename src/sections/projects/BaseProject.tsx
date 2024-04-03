import './projects.css'
import { scrollTo } from '../../NavBar'
import LinkedIcon from '../components/LinkedIcon'
import React from 'react'
import { ExpandProjectButton } from './ExpandProjectButton'
import { TProjects } from '../../navbar-sections'
import { sendAnalyticsEvent } from '../../analytics'

type TBaseProject = {
    projectId: TProjects
    title: string
    subtitle?: string
    icons: {
        image: any
        link: string
        hoverText: string
    }[]
    children: any
}

export function BaseProject({
    projectId,
    title,
    subtitle = undefined,
    icons,
    children,
}: TBaseProject) {
    // const [isExpanded, setIsExpanded] = React.useState(false)

    return (
        <div className="project-container" id={projectId}>
            <h2
                className="project-title"
                onClick={(e) => {
                    e.preventDefault()
                    scrollTo(projectId)
                    sendAnalyticsEvent({
                        category: 'Button Click',
                        action: 'Clicked on Navigation Link',
                        label: '[project title] ' + projectId,
                    })
                }}
            >
                <a
                    href={projectId}
                    style={{ color: 'white', textDecoration: 'none' }}
                >
                    {title}
                    {subtitle && (
                        <div className={'small-text'}>
                            <i>{subtitle}</i>
                        </div>
                    )}
                </a>
            </h2>
            <div className="project-title-container">
                {icons.map((icon) => (
                    <LinkedIcon
                        key={icon.link}
                        image={icon.image}
                        link={icon.link}
                        hoverText={icon.hoverText}
                    />
                ))}
            </div>
            {children}
            {/*<div className={`${isExpanded ? '' : 'collapsed'} transition`}>*/}
            {/*    {children}*/}
            {/*</div>*/}
            {/*<ExpandProjectButton*/}
            {/*    projectId={projectId}*/}
            {/*    isExpanded={isExpanded}*/}
            {/*    setIsExpanded={setIsExpanded}*/}
            {/*/>*/}
        </div>
    )
}
