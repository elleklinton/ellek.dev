import React, { useState } from 'react'
import ReactGA from 'react-ga'

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
import Home from './sections/home/Home'
import Background from './sections/components/Background'
import Footer from './sections/Footer'
import StickySocialVertical from './sections/components/StickySocial'
import Experience from './sections/experience/Experience'
import { sendAnalyticsEvent } from './analytics'

ReactGA.initialize('G-4PSNG8Y49Z', {
    gaOptions: {
        siteSpeedSampleRate: 100,
        sampleRate: 100,
    },
})

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
                <main>
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
                </main>
            </div>
        </div>
    )
}

export default App
