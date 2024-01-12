import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import NavBar from './NavBar'
import Contact from './sections/Contact'
import Resume from './sections/Resume'
import Projects from './sections/projects/Projects'
import About from './sections/About'
import { ParallaxProvider } from 'react-scroll-parallax'
import Home from './sections/home/Home'
import Background from './sections/components/Background'
import lava from './images/lava/lava_1_vertical.jpg'
import Footer from './sections/Footer'

function App() {
    return (
        <div>
            <Background
                image={lava}
                overlayOpacity={0.6}
                style={{
                    marginTop: 'calc(var(--navbar-height) * -1)',
                    height: 'calc(100% + var(--navbar-height))',
                    position: 'fixed',
                }}
            />
            <div className="App">
                <NavBar />
                <Home />
                <About />
                <Projects />
                <Resume />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default App
