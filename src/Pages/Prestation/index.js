import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { prestationsData } from '../../utils/constant'
import { Fade } from "react-awesome-reveal";
import PagesTransition from '../../Components/PagesTransition';

const Prestation = ({prestations}) => {
    const { id } = useParams()
    const allPrestation = [...prestationsData, ...prestations]
    const presation = allPrestation.find((pre) => pre.id === id)


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <section className='prestation'>
            {
                presation &&
                <article>
                    <Fade direction="up">
                        <h1>{presation?.title}</h1>
                    </Fade>
                    {
                        presation?.content?.map((paragraph, key) => ( 
                            <div className='content' key={key}>
                                <Fade direction="up" key={key} delay={100}>
                                    <h2>{paragraph?.title}</h2>
                                </Fade>
                                <Fade direction="up" cascade key={key} delay={200}>
                                            <div className="paragraph" >
                                                <p className="presta-description">{paragraph?.description}</p>
                                                {
                                                    paragraph?.prestations?.map((presta, key) => (
                                                        <div className="pres" key={key}>
                                                            <p>{presta?.text}</p>
                                                            <div className="prices">
                                                            {
                                                                presta?.price?.split('<br />').map((price, key ) => <p key={key}>{price}</p> )
                                                            }
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </Fade>
                            </div>

                        ))
                    }
                </article>
            }
            <PagesTransition />
        </section>
    )
}

export default Prestation