import React from 'react'
import './home.css'
import '../section.css'
import Button from '../components/Button'
import { getNavBarHeight, scrollToSection } from '../../NavBar'

const Home = () => {
    return (
        <div id="home" className="content-section home">
            {/*<Parallax speed={100} translateY={[-100, 100]}>*/}
            <div className="content-container">
                <h1>Hi, I'm Ellek Linton! 👋</h1>
                {/*<h3>Creating Innovative Products with Passion & Precision</h3>*/}
                <h3 style={{ marginTop: 0 }}>
                    Software Engineer @ PayPal, Data Science @ UC Berkeley
                </h3>
                <Button
                    style={{
                        margin: 32,
                        // marginTop: '4rem'
                    }}
                    onClick={() => {
                        scrollToSection('projects')
                    }}
                >
                    See Latest Projects
                </Button>
            </div>
            {/*</Parallax>*/}
        </div>
    )
}

export default Home
