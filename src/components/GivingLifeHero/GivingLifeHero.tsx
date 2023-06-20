import React from 'react'
import RepairContactImg from "../../assets/repair-contact-img.png"
import RepairContactSvg from "../../assets/repair-contact-svgg.svg"
import bg2 from "../../assets/bg2.jpg"
import './GivingLifeHero.scss'
import { Link } from 'react-router-dom'

const GivingLifeHero = () => {
  return (
    <div className="ts-givingLife-hero">
        <div className="ts-givingLife-hero__container container">

            <div className="ts-givingLife-hero__right">
                <div className="ts-givingLife-hero__right__img">
                    <img src={RepairContactSvg} alt="" />
                </div>
                <h1 className="ts-givingLife-hero__right__title title-primary">Giving Life to Used Smartphones</h1>
                <Link to={'/shop'}><button className="ts-givingLife-hero__right__btn btn-primary">Shop Now</button></Link>
            </div>
            <div className="ts-givingLife-hero__left"></div>
            
        </div>
    </div>
  )
}

export default GivingLifeHero