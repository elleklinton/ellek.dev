import app_store from '../../../images/icons/color/app-store.svg'
import external_link from '../../../images/icons/white/external-link.svg'
import baus_1 from '../../../images/baus/baus1.png'
import baus_2 from '../../../images/baus/baus2.png'
import baus_3 from '../../../images/baus/baus3.png'
import baus_4 from '../../../images/baus/baus4.png'
import baus_5 from '../../../images/baus/baus5.png'
import React from 'react'
import './baus.css'
import LinkedIcon from '../../components/LinkedIcon'
import { ImageSlideshow } from '../../components/ImageSlideshow'
import { scrollTo } from '../../../NavBar'
import { BaseProject } from '../BaseProject'

const bausOrderedImages = [baus_1, baus_2, baus_3, baus_4, baus_5]
const textDescriptions = [
    'Step 1: Welcome To Baus',
    'Step 2: Search For Songs',
    'Step 3: Configure Playlist',
    'Step 4: Playlist Created',
    'Step 5: Visualize Playlist',
]

function Baus() {
    const [currImage, setCurrImage] = React.useState(0)

    return (
        <BaseProject
            projectId={'baus'}
            title={'Baus Playlist Maker'}
            icons={[
                {
                    image: app_store,
                    link: '/baus/app-store',
                    hoverText: 'View on App Store',
                },
                {
                    image: external_link,
                    link: '/baus',
                    hoverText: 'Baus Project Website',
                },
            ]}
        >
            <div>
                <p>
                    Meet "Baus Playlist Maker," my brainchild that blends the
                    realms of music and machine learning. Have you ever heard a
                    song and wished you had an entire playlist emanating the
                    same vibe? That’s the premise I started with. By engineering
                    a unique machine learning model, this app takes in a single
                    "seed" song and, like a musical alchemist, curates a
                    playlist echoing its essence.
                    <br />
                    <br />
                    The challenges? Navigating the curse of dimensionality (with
                    data spanning across 13 dimensions) and optimizing the
                    runtime. But with a blend of innovation and tenacity, I was
                    able to leap over these hurdles, taking the efficiency from
                    Θ(n) to a slick Θ(log(n)). This allows users to create
                    unique and incredible playlists in a matter of a
                    split-second.
                    <br />
                    <br />
                    The app, now available on the{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/baus/app-store"
                    >
                        iOS App Store
                    </a>
                    , seamlessly integrates with Spotify API, ensuring users are
                    just a tap away from their next favorite playlist. With a
                    database enriched with over 800,000 songs, each featuring
                    quantified attributes, "Baus Playlist Maker" isn’t just an
                    app; it's a musical journey tailored for every user.
                    <br />
                    <br />
                    <br />
                </p>
                <ImageSlideshow
                    images={bausOrderedImages}
                    descriptions={textDescriptions}
                    currImage={currImage}
                    setCurrImage={setCurrImage}
                />
                <br />
                <br />
                <p>
                    You can view more details about Baus Playlist Maker on the{' '}
                    <a target="_blank" rel="noopener noreferrer" href="/baus">
                        project website
                    </a>
                    .
                </p>
            </div>
        </BaseProject>
    )
}

export default Baus
