import './projects.css'
import { scrollTo } from '../../NavBar'
import LinkedIcon from '../components/LinkedIcon'
import React from 'react'

type TBaseProject = {
    projectId: string
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
    return (
        <div className="project-container" id={projectId}>
            <h2
                className="project-title"
                onClick={(e) => {
                    e.preventDefault()
                    scrollTo(projectId)
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
            <div>{children}</div>
        </div>
    )
}
