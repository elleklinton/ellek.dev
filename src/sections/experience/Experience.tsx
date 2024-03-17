import React from 'react'
import me_img from '../images/me.jpg'
import { ContentSection } from '../components/ContentSection'
import Timeline from './Timeline'
import './timeline.css'

export default function Experience() {
    return (
        <ContentSection
            id="experience"
            title="Professional Experience"
            style={{
                width: '100%',
            }}
        >
            <Timeline />
        </ContentSection>
    )
}
