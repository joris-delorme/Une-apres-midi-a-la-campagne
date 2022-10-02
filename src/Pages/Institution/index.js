import React from 'react'
import Hero from '../../Components/Hero'
import PagesTransition from '../../Components/PagesTransition'
import { prestationsImage } from '../../utils/constant'
import Fade from 'react-reveal/Fade'

const Institution = () => {
    return (
        <section className='institutions'>
            <Hero image={prestationsImage}>
                <Fade bottom delay={200}>
                    <h1>Une Institution de beauté hors du temps</h1>
                </Fade>
            </Hero>
            <PagesTransition />
        </section>
    )
}

export default Institution