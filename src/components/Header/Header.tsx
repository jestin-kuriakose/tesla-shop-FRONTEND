import React, { useState } from 'react'
import Logo from "../../assets/logo-full.png"
import "./Header.scss"
import { Link } from 'react-router-dom'

const Header = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)

    const hamburgerClass = hamburgerOpen ? "ts-header__hamburger-menu open" : "ts-header__hamburger-menu"

    const handleHamburgerClick = () => {
        setHamburgerOpen(prev => !prev)
    }

  return (
    <div className="ts-header">
        <div className="ts-header__container container">
            <div className="ts-header__logo">
                <img src={Logo} alt="Tesla Electronics" className="ts-header__logo__img" />
            </div>

            <div className={hamburgerOpen ? "ts-header__nav open" : "ts-header__nav"}>
                <ul className="ts-header__nav__pages">
                    <Link to={'/'}><li className="ts-header__nav__page">Home</li></Link>
                    <Link to={'/shop'}><li className="ts-header__nav__page">Shop</li></Link>
                    <Link to={'/repair'}><li className="ts-header__nav__page">Repair</li></Link>
                    <Link to={'/contact'}><li className="ts-header__nav__page">Contact Us</li></Link>
                </ul>
                <ul className="ts-header__nav__auth">
                    <Link to={'/login'}><li className="ts-header__nav__login">Login</li></Link>
                    <Link to={'/register'}><li><button className="ts-header__nav__register btn-primary">Sign Up</button></li></Link>
                </ul>
            </div>
            <div className={hamburgerClass} onClick={handleHamburgerClick}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
    </div>
  )
}

export default Header