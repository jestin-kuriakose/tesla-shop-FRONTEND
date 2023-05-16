import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo-full.png'
import CartContext from '../context/CartContext'

const Header = () => {
  const { cart } = useContext(CartContext)

  return (
    <div className='header'>
      <div className="header_container">
        <div className="logo">
          <Link to={'/'}><img className='logo_img' src={Logo} alt="" /></Link>
        </div>
        <ul className="links">
          <Link to={'/'}><li className="link">Home</li></Link>
          <Link to={'/products'}><li className="link">Shop</li></Link>
          <Link to={'/contact'}><li className="link">Contact</li></Link>
          <Link to={'/login'}><li className="link_login">Login</li></Link>
          <Link to={'/contact'}><li className="link">{cart?.length}</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Header