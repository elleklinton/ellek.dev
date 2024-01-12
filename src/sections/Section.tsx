import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import './Section.css'

function Section({ children }: { children: React.ReactNode }) {
    return <Parallax speed={-10}>{children}</Parallax>
}

export default Section
