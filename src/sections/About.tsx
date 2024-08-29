import React from 'react'
import './components/content-section.css'
import me_img from '../images/me2.png'
import { ContentSection } from './components/ContentSection'
import { AnimatedWave } from './components/AnimatedWave'
import { ExternalLink } from './components/ExternalLink'

function About() {
    return (
        <ContentSection id="about" title="About Me">
            <img src={me_img} className="hero-image" alt="Ellek Linton" />
            <div>
                <br />
                <h3
                    style={{
                        width: '100%',
                    }}
                >
                    Hey there! <AnimatedWave fontSize={'20px'} />
                </h3>
                <br />
                <br />
                <p className={'left-text'}>
                    I'm Ellek, an (aspiring) professional poker player who loves
                    classic rock, hypoallergenic doggos, David Lynch movies, and
                    software. I graduated in 2020 from UC Berkeley with a Data
                    Science degree and a{' '}
                    <ExternalLink
                        analyticsLabel={'whole lotta love'}
                        href="https://www.youtube.com/watch?v=HQmmM_qwG4k"
                    >
                        whole lotta love
                    </ExternalLink>{' '}
                    for coding.
                    <br />
                    <br />
                    I currently work on the Machine Learning Infrastructure team
                    at Snap. Previous to this, I worked on the Apple Pay team at
                    PayPal. At the crossroads of coding and creativity, that's
                    where you'll find me. Whether at PayPal, Snap, or on a
                    personal project, I aim to create digital magic.
                    <br />
                    <br />
                    Dive in, and let's have some fun!
                </p>
            </div>
        </ContentSection>
    )
}

export default About
