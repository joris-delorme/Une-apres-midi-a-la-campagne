import React from 'react'
import Hero from '../../Components/Hero'
import PagesTransition from '../../Components/PagesTransition'
import { produitsImage } from '../../utils/constant'
import Fade from 'react-reveal/Fade'

const Produits = () => {
    return (
        <section className='produits'>
            <Hero image={produitsImage}>
                <Fade bottom delay={200}>
                <h1>Plus que de simple produits</h1>
                </Fade>
            </Hero>
            
            <PagesTransition />
        </section>
    )
}

export default Produits