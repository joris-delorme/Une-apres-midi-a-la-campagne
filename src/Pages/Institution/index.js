import React, { useEffect } from 'react'
import Hero from '../../Components/Hero'
import PagesTransition from '../../Components/PagesTransition'
import { institutPage1, institutPage2, prestationsImage } from '../../utils/constant'
import { Fade } from "react-awesome-reveal";
import Parallax from '../../Components/Parallax'

const Institution = ({ skew }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <section className='institutions'>
            <Hero image={prestationsImage}>
                <Fade direction="up" delay={200}>
                    <h2 className='pasifico'>En poussant la porte de l’institut de beauté un après-midi à la campagne vous rentrez dans un univers Phyto aromatique.</h2>
                </Fade>
            </Hero>
            <PagesTransition />
            <section className='institution-content'>
                <div className="image-container image-container-1">
                    <Parallax offset={100}>
                        <img src={institutPage1} alt="Institution 1" />
                    </Parallax>
                </div>
                <div className="text">
                    <div style={{ transform: `skewY(${skew}deg)` }}>
                        <p>Institut Yon-Ka depuis 1992 vous serez accompagné dans cet univers de mille senteurs par Catherine qui vous orientera vers le soin du visage ou du corps le mieux adapté à votre envie du moment.</p>
                    </div>
                </div>
            </section>
            <section className='institution-content reverse'>
                <div className="image-container">
                    <Parallax offset={100}>
                        <img src={institutPage2} alt="Institution 2" />
                    </Parallax>
                </div>
                <div className="text">
                    <div style={{ transform: `skewY(${skew}deg)` }}>
                        <p>L’institut Un après-midi à la campagne c’est aussi les soins minceur avec le Cellu M6, la luxopuncture méthode qui stimule vos énergies et les épilations.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Institution