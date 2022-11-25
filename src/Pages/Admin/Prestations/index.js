import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { scrollDown } from '../../../utils/constant'
import { deleteData } from '../../../utils/firebase'

const Prestations = ({prestations, isCreatePage}) => {

  useEffect(() => {window.scrollTo(0,0)},[])

  const navigate = useNavigate()

  return (
    <section id="admin-presations">
        <div className="admin-presations__container">
          <div className="presations-all">
          <button className='more' onClick={() => isCreatePage(true)}></button>
                {
                    prestations.map((prestation, key) => 
                    <div className="prestation-card-container">
                      <div className="button-container">
                      <button className='edit' onClick={() => navigate('/admin/update/' + prestation.id)}>Modifer</button>
                      <button className='delete' onClick={() => {deleteData(prestation.id)}}>Supprimer</button>
                      </div>
                    <Link className="prestation-card" to={'/prestations/' + prestation.id} key={key}>
                            <div className="img-container">
                                <img src={prestation.image} alt={prestation.title}  />
                            </div>
                            <div className="prestation-card-bottom">

                                <p>{prestation.cardTitle}</p>
                                <img src={scrollDown} alt="scroll down"/>
                            </div>
                    </Link>
                    </div>

                    )
                }
            </div>
        </div>
    </section>
  )
}

export default Prestations