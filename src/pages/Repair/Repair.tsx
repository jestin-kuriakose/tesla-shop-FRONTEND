import React from 'react'
import "./Repair.scss"
import HeroImage from "../../assets/hero-img.png"
import Logo from "../../assets/logo-full.png"
import Circle1 from "../../assets/circle1.png"
import Circle2 from "../../assets/circle2.png"
import Circle3 from "../../assets/circle3.png"
import ShippingSVG from "../../assets/shipping.svg"
import RepairSVG from "../../assets/repair.svg"
import PriceSVG from "../../assets/price.svg"
import Phone1 from "../../assets/phone1.png"
import Phone2 from "../../assets/phone2.png"
import Phone3 from "../../assets/phone3.png"
import Phone4 from "../../assets/phone4.png"
import RepairContactImg from "../../assets/repair-contact-img.png"
import RepairContactSvg from "../../assets/repair-contact-svgg.svg"
import PricingSVG from "../../assets/priceSVG.svg"
import RepairingSVG from "../../assets/repairSVG.svg"
import GearSVG from "../../assets/gearSVG.svg"
import HomeSVG from "../../assets/homeSVG.svg"
import UserSVG from "../../assets/userSVG.svg"
import GroupSVG from "../../assets/groupSVG.svg"
import LogoInverted from "../../assets/logo-inverted.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

const Repair = () => {
  return (
    <div className='ts-home'>

        {/* Header */}
        <div className="ts-header">
            <div className="ts-header__container container">
                <div className="ts-header__logo">
                    <img src={Logo} alt="Tesla Electronics" className="ts-header__logo__img" />
                    {/* <h3 className="ts-header__logo__img">Repair Mart</h3> */}
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
                        <button className="ts-hero__left__searchbox__button">Search</button>
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

        {/* Device Select */}
        <div className="ts-device-select">
            <div className="ts-device-select__container container">
                <h1 className="ts-device-select__heading">What we can fix for you</h1>
                <p className="ts-device-select__subheading">There are many variations of passages of Lorem Ipsum available, but the majority have.</p>
                <div className="ts-device-select__devices">
                    <div className="ts-device-select__device">
                        <img src={Phone1} alt="" className="ts-device-select__device__img" />
                        <h3 className="ts-device-select__device__title">iPhone Repair</h3>
                        <p className="ts-device-select__device__text">
                            From liquid damage to cracked screens, 
                            we provides high-quality, affordable
                            repair services
                        </p>
                    </div>
                    <div className="ts-device-select__device">
                        <img src={Phone2} alt="" className="ts-device-select__device__img" />
                        <h3 className="ts-device-select__device__title">iPhone Repair</h3>
                        <p className="ts-device-select__device__text">
                            From liquid damage to cracked screens, 
                            we provides high-quality, affordable
                            repair services
                        </p>
                    </div>
                    <div className="ts-device-select__device">
                        <img src={Phone3} alt="" className="ts-device-select__device__img" />
                        <h3 className="ts-device-select__device__title">iPhone Repair</h3>
                        <p className="ts-device-select__device__text">
                            From liquid damage to cracked screens, 
                            we provides high-quality, affordable
                            repair services
                        </p>
                    </div>
                    <div className="ts-device-select__device">
                        <img src={Phone4} alt="" className="ts-device-select__device__img" />
                        <h3 className="ts-device-select__device__title">iPhone Repair</h3>
                        <p className="ts-device-select__device__text">
                            From liquid damage to cracked screens, 
                            we provides high-quality, affordable
                            repair services
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Repair Contact */}
        <div className="ts-repair-contact">
            <div className="ts-repair-contact__container container">
                <div className="ts-repair-contact__left">
                    <img className='ts-repair-contact__left__img' src={RepairContactImg} alt="" />
                </div>
                <div className="ts-repair-contact__right">
                    <div className="ts-repair-contact__right__img">
                        <img src={RepairContactSvg} alt="" />
                    </div>
                    <h1 className="ts-repair-contact__right__title">We Repair your all smart device</h1>
                    <p className="ts-repair-contact__right__text">
                        You mug dropped a clanger barmy David brown bread bleeding 
                        crikey say chimney pot me old mucker bugger super
                        the lorem dummy text.
                    </p>
                    <button className="ts-repair-contact__right__btn">Contact Now</button>
                </div>
            </div>
        </div>

        {/* Why Choose us */}
        <div className="ts-choose-us">
            <div className="ts-choose-us__container container">
                <h1 className="ts-choose-us__title">Why Choose Us</h1>
                <p className="ts-choose-us__text">There are many variations of passages of Lorem Ipsum available, but the majority have.</p>
                <div className="ts-choose-us__lists">
                    <div className="ts-choose-us__list">
                        <img className='ts-choose-us__list__img' src={PricingSVG} alt="" />
                        <h3 className="ts-choose-us__list__title">Price Promise</h3>
                        <p className="ts-choose-us__list__text">
                            We provide you with unique products that make your life easier! 
                            These products are created to solve your pain points. Our amazing 
                            products offer you quality and creative solutions for your WordPress website.
                        </p>
                    </div>
                    <div className="ts-choose-us__list">
                        <img className='ts-choose-us__list__img' src={RepairingSVG} alt="" />
                        <h3 className="ts-choose-us__list__title">Express Repairs</h3>
                        <p className="ts-choose-us__list__text">
                            We provide you with unique products that make your life easier! 
                            These products are created to solve your pain points. Our amazing products 
                            offer you quality and creative solutions for your WordPress website.
                        </p>
                    </div>
                    <div className="ts-choose-us__list">
                        <img className='ts-choose-us__list__img' src={GearSVG} alt="" />
                        <h3 className="ts-choose-us__list__title">Premium Parts</h3>
                        <p className="ts-choose-us__list__text">
                            We provide you with unique products that make your life easier! 
                            These products are created to solve your pain points. Our amazing 
                            products offer you quality and creative solutions for your WordPress website.
                        </p>
                    </div>
                    <div className="ts-choose-us__list">
                        <img className='ts-choose-us__list__img' src={HomeSVG} alt="" />
                        <h3 className="ts-choose-us__list__title">Home Service</h3>
                        <p className="ts-choose-us__list__text">
                            We provide you with unique products that make your life easier! 
                            These products are created to solve your pain points. Our amazing 
                            products offer you quality and creative solutions for your WordPress website.
                        </p>
                    </div>
                    <div className="ts-choose-us__list">
                        <img className='ts-choose-us__list__img' src={UserSVG} alt="" />
                        <h3 className="ts-choose-us__list__title">Expert Technicians</h3>
                        <p className="ts-choose-us__list__text">
                            We provide you with unique products that make your life easier! 
                            These products are created to solve your pain points. Our amazing 
                            products offer you quality and creative solutions for your WordPress website.
                        </p>
                    </div>
                    <div className="ts-choose-us__list">
                        <img className='ts-choose-us__list__img' src={GroupSVG} alt="" />
                        <h3 className="ts-choose-us__list__title">Great Support</h3>
                        <p className="ts-choose-us__list__text">
                            We provide you with unique products that make your life easier! 
                            These products are created to solve your pain points. Our amazing 
                            products offer you quality and creative solutions for your WordPress website.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>

        {/* Footer */}
        <footer className="ts-footer">
            <div className="ts-footer__container container">
                <div className="ts-footer__section1">
                    <div className="ts-footer__section1__companyDetails">
                        <div className="ts-footer__section1__logo">
                            <img className="ts-footer__section1__logo__img" src={LogoInverted} alt="" />
                        </div>
                        <p className="ts-footer__section1__text">Nort West, South New Work,United State</p>
                        <p className="ts-footer__section1__text">+1 246-254-0569</p>
                        <p className="ts-footer__section1__text">Info@example.com</p>
                        <div className="ts-footer__section1__social">
                            <FacebookIcon/>
                            <InstagramIcon/>
                            <GoogleIcon/>
                        </div>
                    </div>
                    <div className="ts-footer__section1__hightlights">
                        <h3 className="ts-footer__section1__title">The Highlights</h3>
                        <p className="ts-footer__section1__text">Apartment</p>
                        <p className="ts-footer__section1__text">My Houses</p>
                        <p className="ts-footer__section1__text">Condos</p>
                        <p className="ts-footer__section1__text">Villias</p>
                        <p className="ts-footer__section1__text">Blog & Media</p>
                    </div>
                    <div className="ts-footer__section1__pages">
                        <h3 className="ts-footer__section1__title">How it works</h3>
                        <p className="ts-footer__section1__text">About Us</p>
                        <p className="ts-footer__section1__text">Careers</p>
                        <p className="ts-footer__section1__text">Block Chain</p>
                        <p className="ts-footer__section1__text">Privacy Policy</p>
                        <p className="ts-footer__section1__text">Terms & Condition</p>
                    </div>
                    <div className="ts-footer__section1__aboutUs">
                        <h3 className="ts-footer__section1__title">About Us</h3>
                        <p className="ts-footer__section1__text">Agency List</p>
                        <p className="ts-footer__section1__text">Agency Details</p>
                        <p className="ts-footer__section1__text">Agents List</p>
                        <p className="ts-footer__section1__text">Agent Details</p>
                        <p className="ts-footer__section1__text">Terms & Condition</p>
                    </div>
                </div>
                <div className="ts-footer__section2">
                    <p className="ts-footer__section2__text">&#169; 2023 Phone Repair All right reserved.</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Repair