import React, { useEffect } from 'react'
import Hero from '../../Components/Hero'
import PagesTransition from '../../Components/PagesTransition'
import { prestationsData, prestationsImage } from '../../utils/constant'
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom'

const Prestations = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <section className='prestations'>
            <Hero image={prestationsImage}>
                <Fade direction="up" delay={200}>
                    <h1>Offrez vous des extrats sans payer d’extrat</h1>
                </Fade>
            </Hero>
            <PagesTransition />

            <div className="presations-all">
                {
                    prestationsData.map((prestation, key) => 
                    <Link to={prestation.id} key={key}>
                        <img src={prestation.image} alt={prestation.title}  />
                    </Link>
                    )
                }
            </div>
        </section>
    )
}

export default Prestations