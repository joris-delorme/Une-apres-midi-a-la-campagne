import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='main-navbar'>
      <Link to={"/"} className="logo">LOGO</Link>
      <ul>
        <li>
          <Link to="/institution">L’institution</Link>
        </li>
        <li>
          <Link to="/prestations">Prestations</Link>
        </li>
        <li>
          <Link to="/produits">Produits</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar