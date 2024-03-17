import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './fonts/FuturaLT-Light/style.css'
import './fonts/FuturaLT-Book/style.css'
import './fonts/FuturaLT-Bold/style.css'
import './fonts/FuturaLT-Heavy/style.css'
import NavBar from './NavBar'
import Contact from './sections/Contact'
import Resume from './sections/Resume'
import Projects from './sections/projects/Projects'
import About from './sections/About'
import { ParallaxProvider } from 'react-scroll-parallax'
import Home from './sections/home/Home'
import Background from './sections/components/Background'
import Footer from './sections/Footer'
import StickySocialVertical from './sections/components/StickySocial'
import { isMobile } from './utils'
import Experience from './sections/experience/Experience'

function App() {
    const [activeSection, setActiveSection] = useState('home')

    return (
        <div>
            <Background
                style={{
                    marginTop: 'calc(var(--navbar-height) * -1)',
                    height: 'calc(100% + var(--navbar-height))',
                    position: 'fixed',
                }}
            />
            <div className="App">
                {/*{isMobile() ? (*/}
                {/*    <NavBarMobile*/}
                {/*        activeSection={activeSection}*/}
                {/*        setActiveSection={setActiveSection}*/}
                {/*    />*/}
                {/*) : (*/}
                <NavBar
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
                {/*)}*/}
                <StickySocialVertical activeSection={activeSection} />
                <Home />
                <About />
                <Projects />
                <Experience />
                <Resume />
                <Contact />
                <Footer />
            </div>
        </div>
    )
}

export default App
