import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='main-navbar'>
      <Link to={"/"} className="logo">LOGO</Link>
      <ul className={isOpen ? "active" : ""}>
        <li>
          <Link onClick={() => setIsOpen(!isOpen)} to="/institution">L’institution</Link>
        </li>
        <li>
          <Link onClick={() => setIsOpen(!isOpen)} to="/prestations">Prestations</Link>
        </li>
        <li>
          <Link onClick={() => setIsOpen(!isOpen)} to="/produits">Produits</Link>
        </li>
        <li>
          <Link onClick={() => setIsOpen(!isOpen)} to="/contact">Contact</Link>
        </li>
      </ul>

      <div className={isOpen ? "active menu" : "menu"} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar