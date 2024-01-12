import app_store from '../../../images/icons/color/app-store.svg'
import authentic8r_1 from '../../../images/authentic8r/iphone1.png'
import authentic8r_2 from '../../../images/authentic8r/iphone2.png'
import authentic8r_3 from '../../../images/authentic8r/iphone3.png'
import authentic8r_4 from '../../../images/authentic8r/iphone4.png'
import React from 'react'
import './baus.css'
import LinkedIcon from '../../components/LinkedIcon'
import { ImageSlideshow } from '../../components/ImageSlideshow'
import { scrollToProject } from '../../../NavBar'

const authentic8rOrderedImaged = [
    authentic8r_1,
    authentic8r_2,
    authentic8r_3,
    authentic8r_4,
]
const textDescriptions = [
    'Step 1: Welcome To Authentic8r',
    'Step 2: Select Sneaker Model',
    'Step 3: Take Photo of Sneaker',
    'Step 4: Sneakers Confirmed Real or Fake',
]

function Authentic8r() {
    const [currImage, setCurrImage] = React.useState(0)

    return (
        <div className="project-container">
            <h2
                className="project-title"
                onClick={() => scrollToProject('pied-poker')}
            >
                Authentic8r Counterfeit Sneaker Detection
            </h2>
            <div className="project-title-container">
                <LinkedIcon
                    image={app_store}
                    link="/authentic8r/app-store"
                    hoverText="View on App Store"
                />
            </div>
            <div>
                <p>
                    Navigating the bustling world of sneaker culture, I realized
                    there's an undeniable need: distinguishing the genuine from
                    the counterfeit. The counterfeits had gotten so close to the
                    real-thing, that even experts were often unable to
                    distinguish real from fake. That's when "Authentic8r" was
                    born. It's not just an app; it's a fusion of my sneaker
                    passion with cutting-edge tech. Delving deep into the
                    intricate details of sneaker designs, I built a robust
                    convolutional neural network using Tensorflow to
                    meticulously analyze and predict the authenticity of a
                    sneaker.
                    <br />
                    <br />
                    Manually gathering and labeling a whopping 12,000 images was
                    not the most fun I've ever had, but it allowed me to train
                    my model and achieve an impressive 85% validation accuracy.
                    This might sound all tech, but the real magic? Giving users
                    an instant verdict on their sneakers' legitimacy right from
                    their phones. With thousands of verified users and a
                    continuous influx of images aiding model refinement,
                    "Authentic8r" stands as a testament to the potential of
                    machine learning in the everyday world.
                    <br />
                    <br />
                    Since launching the "Authentic8r" app in 2018, I have
                    attainer over 2,000 users and have collected over 20,000
                    additional self-labeled images from users, enabling me to
                    improve the accuracy of the model further.
                    <br />
                    <br />
                    <br />
                </p>
                <ImageSlideshow
                    images={authentic8rOrderedImaged}
                    descriptions={textDescriptions}
                    currImage={currImage}
                    setCurrImage={setCurrImage}
                />
                <br />
                <br />
                <p>
                    Authentic8r is available on the{' '}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/authentic8r/app-store"
                    >
                        iOS App Store
                    </a>
                    .
                </p>
            </div>
        </div>
    )
}

export default Authentic8r
