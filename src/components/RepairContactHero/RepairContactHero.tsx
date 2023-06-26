import React from 'react'
import RepairContactImg from "../../assets/repair-contact-img.png"
import RepairContactSvg from "../../assets/repair-contact-svgg.svg"
import "./RepairContactHero.scss"
import { Link } from 'react-router-dom'

const RepairContactHero = () => {
  return (
    <div className="ts-repair-contact">
        <div className="ts-repair-contact__container container">
            <div className="ts-repair-contact__left">
                <img className='ts-repair-contact__left__img' src={RepairContactImg} alt="" />
            </div>
            <div className="ts-repair-contact__right">
                <div className="ts-repair-contact__right__img">
                    <img src={RepairContactSvg} alt="" />
                </div>
                <h1 className="ts-repair-contact__right__title title-primary">Repairs you can rely on</h1>
                <p className="ts-repair-contact__right__text subtitle-primary">
                    {`When you bring your broken or damaged phone to Tesla Electronics, you can trust you’re getting 
                    quality repairs using premium quality parts. Plus, most repairs can be done in an hour.`}
                </p>
                <Link to={'/contact'}><button className="ts-repair-contact__right__btn btn-primary">Contact Now</button></Link>
            </div>
        </div>
    </div>
  )
}

export default RepairContactHero