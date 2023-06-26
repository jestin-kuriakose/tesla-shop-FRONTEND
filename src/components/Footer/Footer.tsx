import React from 'react'
import LogoInverted from "../../assets/logo-inverted.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import "./Footer.scss"

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
  return (
    <footer className="ts-footer">
        <div className="ts-footer__container container">
            <div className="ts-footer__section1">
                <div className="ts-footer__section1__companyDetails">
                    <div className="ts-footer__section1__logo">
                        <img className="ts-footer__section1__logo__img" src={LogoInverted} alt="" />
                    </div>
                    <p className="ts-footer__section1__text">79 Florence Ave</p>
                    <p className="ts-footer__section1__text">+1 519-722-0063</p>
                    <p className="ts-footer__section1__text">sales@teslaelectronics.ca</p>
                    <div className="ts-footer__section1__social">
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <GoogleIcon/>
                    </div>
                </div>
                <div className="ts-footer__section1__services">
                    <h3 className="ts-footer__section1__title">Services</h3>
                    <p className="ts-footer__section1__text">Shop Certified Pre-Owned Phones</p>
                    <p className="ts-footer__section1__text">Repair My Device</p>
                    <p className="ts-footer__section1__text">Sell My Device</p>
                </div>
                <div className="ts-footer__section1__shopOnline">
                    <h3 className="ts-footer__section1__title">Shop online</h3>
                    <p className="ts-footer__section1__text">Apple</p>
                    <p className="ts-footer__section1__text">Samsung</p>
                    <p className="ts-footer__section1__text">Google</p>
                </div>
                <div className="ts-footer__section1__aboutUs">
                    <h3 className="ts-footer__section1__title"></h3>
                    <p className="ts-footer__section1__text">About Us</p>
                    <p className="ts-footer__section1__text">Contact US</p>
                    <p className="ts-footer__section1__text">FAQs</p>
                </div>
            </div>
            <div className="ts-footer__section2">
                <p className="ts-footer__section2__text">&#169; {year} Tesla Electronics Inc. All right reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer