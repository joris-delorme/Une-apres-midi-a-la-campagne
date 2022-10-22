import React, {useEffect} from 'react'
import Hero from '../../Components/Hero'
import PagesTransition from '../../Components/PagesTransition'
import { marque1, marque2, produits1, produits2, produitsImage } from '../../utils/constant'
import Fade from 'react-reveal/Fade'

const Produits = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className='produits'>
            <Hero image={produitsImage}>
                <Fade bottom delay={200}>
                <h1>Plus que de simple produits</h1>
                </Fade>
            </Hero>
            
            <PagesTransition />

            <div className="produits-content">
                <img className='marque' src={marque1} alt="marque 1" />
                <img className='produits' src={produits1} alt="produits 1" />
                <img className='marque' src={marque2} alt="marque 2" />
                <img className='produits' src={produits2} alt="produits 2" />
            </div>
        </section>
    )
}

export default Produits