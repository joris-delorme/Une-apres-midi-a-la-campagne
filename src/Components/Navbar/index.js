import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../../utils/constant'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='main-navbar'>
      <Link to={"/"} className="logo"> <img src={logo} alt="bocale avec une fleure" /> </Link>
      <ul className={isOpen ? "active" : ""}>
        <li>
          <Link onClick={() => setIsOpen(!isOpen)} to="/institution">Institut</Link>
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