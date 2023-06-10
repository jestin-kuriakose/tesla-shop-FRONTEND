import React from 'react'
import "./Repair.scss"
import HeroImage from "../../assets/hero-img.png"

const Repair = () => {
  return (
    <div className='ts-home'>

        {/* Header */}
        <div className="ts-header">
            <div className="ts-header__container">
                <div className="ts-header__logo">
                    {/* <img src="" alt="" className="ts-header__logo__img" /> */}
                    <h3 className="ts-header__logo__img">Repair Mart</h3>
                </div>
                <div className="ts-header__nav">
                    <ul className="ts-header__nav__pages">
                        <li className="ts-header__nav__page">Repair</li>
                        <li className="ts-header__nav__page">How It Works</li>
                        <li className="ts-header__nav__page">About Us</li>
                        <li className="ts-header__nav__page">Contact Us</li>
                    </ul>
                    <ul className="ts-header__nav__auth">
                        <li className="ts-header__nav__login">Login</li>
                        <li><button className="ts-header__nav__register">Sign Up</button></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Hero */}
        <div className="ts-hero">
            <div className="ts-hero__container">
                {/* Left Section */}
                <div className="ts-hero__left">
                    <h1 className="ts-hero__left__heading">
                        Smartphone,Ipad & Mac Repair Service At Doorstep In Alaska.
                    </h1>
                    <p className="ts-hero__left__paragraph">
                        "Unify your team’s video creation process under one repository to create, collaborat scale."
                    </p>
                    <div className="ts-hero__left__searchbox">
                        <select name="device" id="device" placeholder='Search your device' className="ts-hero__left__searchbox__dropdown">
                            <option value="" disabled selected className="ts-hero__left__searchbox__dropdown__option">Search your device</option>
                        </select>
                        <button className="ts-hero__left__searchbox__button">Search</button>
                    </div>
                </div>
                {/* Right Section */}
                <div className="ts-hero__right">
                    <div className="ts-hero__right__img">
                        <img src={HeroImage} alt="" />
                    </div>
                    <div className="ts-hero__right__circle"></div>
                    <div className="ts-hero__right__customerCount">
                        <span>2K</span>
                        <p>Happy Customers</p>
                    </div>
                    <div className="ts-hero__right__orderCount"><p>3 Active Orders</p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Repair