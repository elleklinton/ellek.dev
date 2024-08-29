import React, { CSSProperties } from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './timeline.css'
import { TimelineEvent } from './timeline-event/TimelineEvent'
import snap from '../../images/icons/logos/snap.svg'
import paypal from '../../images/icons/logos/paypal.svg'
import edify from '../../images/icons/logos/edify.svg'
import { TimelineEventPaneContainer } from './timeline-event/TimelineEventPaneContainer'
import { TimelineEventPane } from './timeline-event/TimelineEventPane'
import { TimelineEventPaneItem } from './timeline-event/TimelineEventPaneItem'

import trophy from '../../images/icons/color/trophy.svg'
import java from '../../images/icons/logos/java.svg'
import python from '../../images/icons/logos/python.svg'
import nodejs from '../../images/icons/logos/nodejs.svg'
import react from '../../images/icons/logos/react.svg'
import typescript from '../../images/icons/logos/typescript.svg'
import swift from '../../images/icons/logos/swift.svg'
import sql from '../../images/icons/logos/sql.svg'
import aws from '../../images/icons/logos/aws.svg'
import azure from '../../images/icons/logos/azure.svg'
import gcp from '../../images/icons/logos/gcp.svg'
import kubernetes from '../../images/icons/logos/kubernetes.svg'

function ExperienceIcon({
    image,
    style = {},
}: {
    image: any
    style?: CSSProperties
}) {
    return (
        <img
            style={{
                width: '75%',
                height: 'auto',
                ...style,
                // top: '50%',
                // transform: 'translateY(-50%)',
                // maxWidth: '100%',
            }}
            src={image}
        />
    )
}

function Timeline() {
    const bravoHoverText = `were given by peers to recognize exceptional dedication, collaboration, and problem-solving efforts beyond the usual scope of work.`
    const spotHoverText = `were given by leadership for exemplary work on the Apple Pay team for my work to redesign and rebuild our test tool and to clean up/modernize our API Swagger schema.`
    return (
        <VerticalTimeline>
            <TimelineEvent
                position={'Senior Software Engineer'}
                positionSubtitle={'ML Infrastructure'}
                company={'Snap Inc.'}
                location={'San Francisco, CA'}
                date={'July 2024 - Present'}
                icon={
                    <ExperienceIcon
                        style={{
                            width: '100%',
                        }}
                        image={snap}
                    />
                }
            >
                <div className={'timeline-summary'}>
                    In July 2024, I joined the Machine Learning Infrastructure
                    team at Snap as a Senior Backend Software Engineer. On this
                    team, I work on the infrastructure that powers Snap's
                    machine learning models, specifically, in content
                    understanding and feature store.
                </div>
                <TimelineEventPaneContainer>
                    <TimelineEventPane title={'Tech'}>
                        <TimelineEventPaneItem name={'Java'} icon={java} />
                        <TimelineEventPaneItem name={'Python'} icon={python} />
                        <TimelineEventPaneItem name={'SQL'} icon={sql} />
                        <TimelineEventPaneItem name={'GCP'} icon={gcp} />
                        <TimelineEventPaneItem name={'AWS'} icon={aws} />
                        <TimelineEventPaneItem
                            name={'Kubernetes'}
                            icon={kubernetes}
                        />
                    </TimelineEventPane>
                </TimelineEventPaneContainer>
            </TimelineEvent>
            <TimelineEvent
                position={'Software Engineer'}
                positionSubtitle={'Apple Pay'}
                company={'PayPal'}
                location={'San Francisco, CA'}
                date={'January 2022 - June 2024'}
                icon={<ExperienceIcon image={paypal} />}
            >
                <div className={'timeline-summary'}>
                    From January 2022 to June 2024, I had the incredible
                    opportunity to work on the Apple Pay team at PayPal. On this
                    team, I built/maintained backend REST and GraphQL APIs to
                    facilitate Apple Pay transactions at scale and built a
                    highly functional full-stack test tool from scratch to
                    simulate Apple Pay integrations.
                </div>
                <TimelineEventPaneContainer>
                    <TimelineEventPane title={'Tech'}>
                        <TimelineEventPaneItem name={'Java'} icon={java} />
                        <TimelineEventPaneItem name={'Python'} icon={python} />
                        <TimelineEventPaneItem name={'NodeJS'} icon={nodejs} />
                        <TimelineEventPaneItem name={'React'} icon={react} />
                        <TimelineEventPaneItem
                            name={'TypeScript'}
                            icon={typescript}
                        />
                        <TimelineEventPaneItem name={'Swift'} icon={swift} />
                        <TimelineEventPaneItem name={'SQL'} icon={sql} />
                        <TimelineEventPaneItem name={'GCP'} icon={gcp} />
                    </TimelineEventPane>
                    <TimelineEventPane title={'Awards'}>
                        <TimelineEventPaneItem
                            name={'Spot Awards'}
                            quantity={2}
                            icon={trophy}
                            hoverText={spotHoverText}
                        />
                        <TimelineEventPaneItem
                            name={'"Bravo" Awards'}
                            quantity={5}
                            icon={trophy}
                            hoverText={bravoHoverText}
                        />
                    </TimelineEventPane>
                </TimelineEventPaneContainer>
            </TimelineEvent>
            <TimelineEvent
                position={'Software Engineer'}
                positionSubtitle={'Merchant Onboarding'}
                company={'PayPal'}
                location={'San Jose, CA'}
                date={'July 2020 - January 2022'}
                icon={<ExperienceIcon image={paypal} />}
            >
                <div className={'timeline-summary'}>
                    I began my career at PayPal as a backend engineer on the
                    merchant onboarding team. On this team, I built and
                    maintained high-volume REST and GraphQL APIs, and worked
                    closely with large marketplace partners to facilitate
                    onboarding of their merchants.
                </div>
                <TimelineEventPaneContainer>
                    <TimelineEventPane title={'Tech'}>
                        <TimelineEventPaneItem name={'Java'} icon={java} />
                        <TimelineEventPaneItem name={'Python'} icon={python} />
                        <TimelineEventPaneItem name={'NodeJS'} icon={nodejs} />
                        <TimelineEventPaneItem
                            name={'TypeScript'}
                            icon={typescript}
                        />
                        <TimelineEventPaneItem name={'SQL'} icon={sql} />
                        <TimelineEventPaneItem name={'AWS'} icon={aws} />
                    </TimelineEventPane>
                    <TimelineEventPane title={'Awards'}>
                        <TimelineEventPaneItem
                            name={'"Bravo" Awards'}
                            quantity={4}
                            icon={trophy}
                            hoverText={bravoHoverText}
                        />
                    </TimelineEventPane>
                </TimelineEventPaneContainer>
            </TimelineEvent>
            <TimelineEvent
                position={'Lead API Engineer'}
                positionSubtitle={'(Freelance Contractor)'}
                company={'Edify.ai'}
                location={'San Francisco, CA'}
                date={'July 2021'}
                icon={<ExperienceIcon image={edify} />}
            >
                <div className={'timeline-summary'}>
                    At Edify.ai, I built from scratch a high volume REST API for
                    enterprise customers to fetch job site safety data, serving
                    over 800,000 records per day. The API implements OAuth 2.0
                    authentication, and uses a REST JSON schema validation
                    framework I also built from scratch to enforce schema and
                    ensure a consistent and stable user experience.
                </div>
                <TimelineEventPaneContainer>
                    <TimelineEventPane title={'Tech'}>
                        <TimelineEventPaneItem
                            name={'TypeScript'}
                            icon={typescript}
                        />
                        <TimelineEventPaneItem name={'NodeJS'} icon={nodejs} />
                        <TimelineEventPaneItem name={'AWS'} icon={aws} />
                        <TimelineEventPaneItem name={'Azure'} icon={azure} />
                        <TimelineEventPaneItem name={'SQL'} icon={sql} />
                    </TimelineEventPane>
                </TimelineEventPaneContainer>
            </TimelineEvent>
        </VerticalTimeline>
    )
}

export default Timeline
