import React from 'react'
import MagneticButton from '../../Components/MagneticButton'
import Parallax from '../../Components/Parallax'
import { homeInstitutionImage, presationImage1, presationImage2, presationImage3, homeImage } from '../../utils/constant'
import Hero from '../../Components/Hero'
import { motion } from 'framer-motion'
import PagesTransition from '../../Components/PagesTransition'
import Fade from 'react-reveal/Fade';
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Home = ({ skew }) => {
  return (
    <motion.section className='home'>
      <Hero image={homeImage}>
        <Fade bottom delay={200}>
        <h1>Une après-midi à la campagne</h1>
        </Fade>
        <Fade bottom delay={400}>
        <MagneticButton isLink={true} link='/contact'>Prendre un rendez-vous</MagneticButton>
        </Fade>
      </Hero>
      <section className='home-institution'>
        <div className="image-container">
          <Parallax offset={100}>
            <img src={homeInstitutionImage} alt="Institution Image" />
          </Parallax>
        </div>
        <div className="text">
          <div style={{ transform: `skewY(${skew}deg)` }}>
            <h2>Plus qu’une simple intsitution, c’est un art.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum eget cras non lobortis convallis. Mauris urna nunc a tristique enim vitae. Maecenas mauris semper eget sodales.</p>
          </div>
          <MagneticButton role='secondary' position='left' isLink={true} link='/institution' >En savoir plus</MagneticButton>
        </div>
      </section>
      <section className='home-prestation'>
        <h2>Des prestations hors du temps</h2>
        <div className="items">
          <Parallax offset={-50}>
            <img src={presationImage1} alt="" />
          </Parallax>
          <Parallax>
            <img src={presationImage2}  alt="" />
          </Parallax>
          <Parallax offset={-50}>
            <img src={presationImage3} alt="" />
          </Parallax>
        </div>
        <div className="items-res">
          <img src={presationImage1} alt="" />
          <img src={presationImage2} alt="" />
          <img src={presationImage3} alt="" />
        </div>
        <MagneticButton role='secondary' isLink={true} link='/prestations'>Toute les prestations</MagneticButton>
      </section>
    <PagesTransition />
    </motion.section>
  )
}

export default Home