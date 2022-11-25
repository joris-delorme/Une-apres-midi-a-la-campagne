import React, { useEffect } from 'react'
import Hero from '../../Components/Hero'
import PagesTransition from '../../Components/PagesTransition'
import { prestationsData, prestationsImage } from '../../utils/constant'
import { Link } from 'react-router-dom'
import { scrollDown } from '../../utils/constant';
import { getDocs, collection, } from 'firebase/firestore'
import { db } from '../../utils/firebase'

const Prestations = ({ setPrestations, prestations }) => {

    const getPrestations = async () => {
        return await getDocs(collection(db, "prestations"))
    }

    useEffect(() => {
        let isMounted = true; // note mutable flag
        window.scrollTo(0, 0)
        const newPrestations = []
        getPrestations().then(data => {
            if (isMounted) data.forEach((doc) => {
                const newData = doc.data()
                newData["id"] = doc.id
                newPrestations.push(newData)
                setPrestations(newPrestations)
            });
        })
        //eslint-disable-next-line
    }, [])

    return (
        <section className='prestations'>
            <Hero image={prestationsImage}>
                {/*<Fade direction="up" delay={200}>
                    <h1>Offrez vous des extrats sans payer d’extrat</h1>
    </Fade>*/}
            </Hero>
            <PagesTransition />

            <div className="presations-all">
                {
                    [...prestationsData, ...prestations].map((prestation, key) =>
                        <Link className="prestation-card" to={prestation.id} key={key}>
                            <div className="img-container">
                                <img src={prestation.image} alt={prestation.title} />
                            </div>
                            <div className="prestation-card-bottom">

                                <p>{prestation.cardTitle}</p>
                                <img src={scrollDown} alt="scroll down" />
                            </div>
                        </Link>
                    )
                }
            </div>
        </section>
    )
}

export default Prestations