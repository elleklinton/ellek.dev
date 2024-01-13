import React from 'react'
import Background from '../components/Background'
import '../content-section.css'
import './projects.css'
import poker_gif from '../../images/poker.gif'
import SectionTitle from '../components/SectionTitle'
import PiedPoker from './project-containers/PiedPoker'
import Baus from './project-containers/Baus'
import Authentic8r from './project-containers/Authentic8r'
import { ContentSection } from '../ContentSection'

function Projects() {
    return (
        <ContentSection id={'projects'} title={'Projects'}>
            <p className="bottom-padding top-padding">
                In between professional commitments and the craziness of life, I
                love diving deep into personal projects. They’re my playground –
                spaces where I experiment, innovate, and get to just create
                something super cool! Below are some of the creations I'm
                particularly proud of. Let's take a journey through them.
            </p>

            <PiedPoker />
            <Baus />
            <Authentic8r />
        </ContentSection>
    )
}

export default Projects
