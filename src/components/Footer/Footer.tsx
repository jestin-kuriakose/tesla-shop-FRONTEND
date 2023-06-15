import React from 'react'
import LogoInverted from "../../assets/logo-inverted.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import "./Footer.scss"

const Footer = () => {
  return (
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
  )
}

export default Footer