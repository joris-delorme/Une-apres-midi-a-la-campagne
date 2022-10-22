import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { prestationsData } from '../../utils/constant'
import { Fade } from "react-awesome-reveal";

const Prestation = () => {
    const { id } = useParams()
    const presation = prestationsData.find((pre) => pre.id === id)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <section className='prestation'>
            {
                presation &&
                <article>
                    <Fade bottom>
                        <h1>{presation?.title}</h1>
                    </Fade>
                    {
                        presation?.content.map((content, key) => (
                            <div className='content' key={key}>
                                <Fade bottom key={key} delay={100}>
                                    <h2>{content?.title}</h2>
                                </Fade>
                                {
                                    content?.paragraph.map((paragraph, key) => (
                                        <Fade bottom cascade key={key} delay={200}>
                                            <div className="paragraph" >
                                                {
                                                    paragraph?.prestations.map((presta, key) => (
                                                        <div className="pres" key={key}>
                                                            <p>{presta?.text}</p>
                                                            <p>{presta?.price}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </Fade>

                                    ))
                                }
                            </div>

                        ))
                    }
                </article>
            }
        </section>
    )
}

export default Prestation