import React from 'react'
import RepairContactImg from "../../assets/repair-contact-img.png"
import RepairContactSvg from "../../assets/repair-contact-svgg.svg"
import "./RepairContactHero.scss"

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
                <h1 className="ts-repair-contact__right__title title-primary">We Repair your all smart device</h1>
                <p className="ts-repair-contact__right__text subtitle-primary">
                    You mug dropped a clanger barmy David brown bread bleeding 
                    crikey say chimney pot me old mucker bugger super
                    the lorem dummy text.
                </p>
                <button className="ts-repair-contact__right__btn btn-primary">Contact Now</button>
            </div>
        </div>
    </div>
  )
}

export default RepairContactHero