import React from 'react'
import './content-section.css'
import me_img from '../images/me.jpg'
import { ContentSection } from './ContentSection'

function About() {
    return (
        <ContentSection id="about" title="About Me">
            <img src={me_img} className="hero-image" alt="Ellek Linton" />
            <p>
                <br />
                Hey there! 👋
                <br />
                <br />
                I'm Ellek, and I've graduated from UC Berkeley, armed with a
                Data Science degree and a{' '}
                <a href="https://www.youtube.com/watch?v=ubchplluX9o">
                    whole lotta love
                </a>{' '}
                for coding. At the crossroads of coding and creativity, that's
                where you'll find me. Whether at PayPal or on a personal
                project, I aim to create digital magic. Dive in, and let's have
                some fun!
            </p>
        </ContentSection>
    )
}

export default About
