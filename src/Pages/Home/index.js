import React, {useEffect} from 'react'
import MagneticButton from '../../Components/MagneticButton'
import Parallax from '../../Components/Parallax'
import { homeInstitutionImage, institut1, institut2,institut3 } from '../../utils/constant'
import { motion } from 'framer-motion'
import PagesTransition from '../../Components/PagesTransition'

//const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Home = ({ skew }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
}, [])

  return (
    <motion.section className='home'>
      <section className='home-institution'>
        <div className="image-container">
          <Parallax offset={100}>
            <img src={homeInstitutionImage} alt="Institution Main" />
          </Parallax>
        </div>
        <div className="text">
          <div style={{ transform: `skewY(${skew}deg)` }}>
            <h2 className='pasifico'>Bienvenue à un après-midi à la campagne</h2>
            <p>En poussant la porte de l’institut de beauté un après-midi à la campagne vous rentrez dans un univers Phyto aromatique.</p>
          </div>
          <MagneticButton role='secondary' position='left' isLink={true} link='/institution' >En savoir plus</MagneticButton>
        </div>
      </section>

      <section className='home-prestation'>
        {/*<h2>Des prestations hors du temps</h2>*/}
        <div className="items">
          <Parallax offset={-50}>
            <img src={institut1} alt="institution 1" />
          </Parallax>
          <Parallax>
            <img src={institut2}  alt="institution 2" />
          </Parallax>
          <Parallax offset={-50}>
            <img src={institut3} alt="institution 3" />
          </Parallax>
        </div>
        <div className="items-res">
          <img src={institut1} alt="" />
          <img src={institut2} alt="" />
          <img src={institut3} alt="" />
        </div>
        {/*<MagneticButton role='secondary' isLink={true} link='/prestations'>Toute les prestations</MagneticButton>*/}
      </section>
      <section className="informations">
        <div className="information">
          <p>Stationnement gratuit de 12h à 14h et à partir de 18h</p>
        </div>
        <div className="information">
          <p>Arrêt bus ligne 1 Capucins ou rue de Seyssel</p>
        </div>
        <div className="information">
          <p>Adresse<br />2, boulevard Jacques Replat 74000 Annecy</p>
        </div>
      </section>
    <PagesTransition />
    </motion.section>
  )
}

export default Home