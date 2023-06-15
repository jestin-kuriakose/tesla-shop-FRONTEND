import React from 'react'
import HeroImage from "../../assets/hero-img.png"
import ShippingSVG from "../../assets/shipping.svg"
import RepairSVG from "../../assets/repair.svg"
import PriceSVG from "../../assets/price.svg"
import "./Hero.scss"

const Hero = () => {
  return (
    <div className="ts-hero">
    <div className="ts-hero__container container">
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
                <button className="ts-hero__left__searchbox__button btn-primary">Search</button>
            </div>
        </div>
        {/* Right Section */}
        <div className="ts-hero__right">
            <div className="ts-hero__right__img">
                <img src={HeroImage} alt="" />
                <div className="ts-hero__right__img__circle"></div>
                {/* <div className="ts-hero__right__img__customerCount">
                    <div className="ts-hero__right__img__customerCount__container">
                        <img src={Circle1} className='ts-hero__right__img__customerCount__circle1'/>
                        <img src={Circle2} className='ts-hero__right__img__customerCount__circle2'/>
                        <img src={Circle3} className='ts-hero__right__img__customerCount__circle3'/>
                        <span className='ts-hero__right__img__customerCount__circle4'>2K</span>
                        <p className='ts-hero__right__img__customerCount__text'>Happy Customers</p>
                    </div>
                </div> */}
                <div className="ts-hero__right__img__orderCount"><p>3 Active Orders</p></div>
            </div>
        </div>

        <div className="ts-hero__middle">
            <div className="ts-hero__middle__container">
                <div className="ts-hero__middle__section1">
                    <img src={ShippingSVG} alt="" />
                    <p>Free Pickup and drop</p>
                </div>
                <div className="ts-hero__middle__section2">
                    <img src={RepairSVG} alt="" />
                    <p>30 Minutes Repair</p>
                </div>
                <div className="ts-hero__middle__section3">
                    <img src={PriceSVG} alt="" />
                    <p>Affordable Price</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Hero