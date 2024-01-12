import React from 'react'
import './section.css'
import me_img from '../images/me.jpg'
import { Parallax } from 'react-scroll-parallax'
import SectionTitle from './components/section-title'

function About() {
    return (
        <div className="content-section" id="about">
            {/*<Background image={lava} overlayOpacity={0.75}/>*/}
            {/*<Parallax translateX={[100, -100]} shouldAlwaysCompleteAnimation={true}>*/}
            <div className="content-container">
                <div className="line" />
                <SectionTitle sectionName="about">About Me</SectionTitle>
                <div className="line" />
                <div className="top-padding bottom-padding">
                    <img
                        src={me_img}
                        className="hero-image"
                        alt="Ellek Linton"
                    />
                    <p>
                        Hey there! 👋
                        <br />
                        I'm Ellek, and I've graduated from UC Berkeley, armed
                        with a Data Science degree and a{' '}
                        <a href="https://www.youtube.com/watch?v=ubchplluX9o">
                            whole lotta love
                        </a>{' '}
                        for coding. At the crossroads of coding and creativity,
                        that's where you'll find me. Whether at PayPal or on a
                        personal project, I aim to create digital magic. Dive
                        in, and let's have some fun!
                    </p>
                </div>
            </div>
            {/*</Parallax>*/}
        </div>
    )
}

export default About
