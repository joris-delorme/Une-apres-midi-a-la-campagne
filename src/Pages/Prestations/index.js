import React from 'react'
import Hero from '../../Components/Hero'
import PagesTransition from '../../Components/PagesTransition'
import { prestationsImage } from '../../utils/constant'
import Fade from 'react-reveal/Fade'
const Prestation = () => {
    return (
        <section className='prestations'>
            <Hero image={prestationsImage}>
                <Fade bottom delay={200}>
                    <h1>Offrez vous des extrats sans payer d’extrat</h1>
                </Fade>
            </Hero>
            <PagesTransition />
        </section>
    )
}

export default Prestation