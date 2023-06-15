import React, { useState } from 'react'
import Logo from "../../assets/logo-full.png"
import "./Header.scss"

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
                    <li className="ts-header__nav__page">Repair</li>
                    <li className="ts-header__nav__page">How It Works</li>
                    <li className="ts-header__nav__page">About Us</li>
                    <li className="ts-header__nav__page">Contact Us</li>
                </ul>
                <ul className="ts-header__nav__auth">
                    <li className="ts-header__nav__login">Login</li>
                    <li><button className="ts-header__nav__register btn-primary">Sign Up</button></li>
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