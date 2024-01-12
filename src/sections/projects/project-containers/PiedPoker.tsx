import poker_gif from '../../../images/poker.gif'
import github_svg from '../../../images/icons/white/github.svg'
import colab_svg from '../../../images/icons/color/colab.svg'
import python_svg from '../../../images/icons/color/python.svg'
import React from 'react'
import LinkedIcon from '../../components/LinkedIcon'
import { scrollToProject } from '../../../NavBar'

function PiedPoker() {
    return (
        <div id="pied-poker" className="project-container">
            <h2
                className="project-title"
                onClick={() => scrollToProject('pied-poker')}
            >
                Pied Poker
            </h2>
            <div className="project-title-container">
                <LinkedIcon
                    image={colab_svg}
                    link="/pied-poker/colab-notebook"
                    hoverText="Google Colab Notebook"
                />
                <LinkedIcon
                    image={github_svg}
                    link="/pied-poker/github"
                    hoverText="Github"
                />
                <LinkedIcon
                    image={python_svg}
                    link="/pied-poker/pypi"
                    hoverText="PyPi Package"
                />
            </div>
            <p>
                Enter the world of "Pied Poker," a sophisticated poker
                probability engine I meticulously crafted from scratch. Driven
                by the powerful Monte-Carlo simulations, it's not just another
                poker calculator — it's a game-changer. The tool delves deep,
                calculating probabilities that would traditionally be
                computationally intensive or downright impossible to derive in
                real time.
                <br />
                <br />
                Yet, with optimized hand calculations and nimble simulation
                performance, "Pied Poker" delivers these statistics at lightning
                speed, all within seconds. Beyond its capabilities, I took it a
                step further by launching the engine as a{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/pied-poker/pypi"
                >
                    Python package on PyPI
                </a>
                . Now, not only can I boast about its prowess, but developers
                and poker enthusiasts worldwide can seamlessly integrate and
                benefit from it. With hundreds of downloads each month, this
                project stands as a testament to the blend of my love for data,
                coding, and the intricate game of poker.
                <br />
                <br />
                <br />
                <img
                    src={poker_gif}
                    className="project-image"
                    alt="Pied Poker"
                />
                <br />
                <br />
                Check out the{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/pied-poker/github"
                >
                    GitHub
                </a>{' '}
                and{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="/pied-poker/colab-notebook"
                >
                    Google Colab notebook
                </a>{' '}
                I created to play around with Pied Poker for yourself!
            </p>
        </div>
    )
}

export default PiedPoker
