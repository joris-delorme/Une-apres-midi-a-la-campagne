import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Besoins d’un rendez-vous, d’une information ?</p>
      <Link to='/contact'>Contactez-nous</Link>
    </footer>
  )
}

export default Footer