import React from 'react'
import Hero from '../../Components/Hero'
import PagesTransition from '../../Components/PagesTransition'
import { contactImage } from '../../utils/constant'

const Contact = () => {
    return (
        <section className='contact'>
            <Hero image={contactImage}>
                <h1>Une Institution de beauté hors du temps</h1>
            </Hero>
            <PagesTransition />
        </section>
    )
}

export default Contact