import React from 'react'
import { footerImage } from '../../utils/constant'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='image' style={{backgroundImage: 'url('+footerImage+')'}}>
      <p>Besoins d’un rendez-vous, d’une information ?</p>
      <Link to='/contact'>Contactez-nous</Link>
    </footer>
  )
}

export default Footer