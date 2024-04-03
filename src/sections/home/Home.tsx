import React from 'react'
import './home.css'
import '../components/content-section.css'
import Button from '../components/Button'
import { getNavBarHeight, scrollTo } from '../../NavBar'
import SocialIconsRow from '../components/SocialIconsRow'
import { AnimatedWave } from '../components/AnimatedWave'
import { sendAnalyticsEvent } from '../../analytics'

const Home = () => {
    return (
        <div id="home" className="content-section home">
            {/*<Parallax speed={100} translateY={[-100, 100]}>*/}
            <div className="content-container">
                <header>
                    <h1>
                        Hi, I'm Ellek Linton! <AnimatedWave fontSize={'40px'} />
                    </h1>
                    {/*<h3>Creating Innovative Products with Passion & Precision</h3>*/}
                    <h3
                        style={{
                            marginTop: 0,
                            paddingBottom: 20,
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Software Engineer @ PayPal
                        <br />
                        Data Science @ UC Berkeley
                    </h3>
                </header>
                <SocialIconsRow analyticsSource={'home'} />
                <Button
                    style={{
                        margin: 32,
                        // marginTop: '4rem'
                    }}
                    onClick={() => {
                        scrollTo('projects')
                        sendAnalyticsEvent({
                            category: 'Button Click',
                            action: 'Clicked on Navigation Link',
                            label: '[home button] projects',
                        })
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
