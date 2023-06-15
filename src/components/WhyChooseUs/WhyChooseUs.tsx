import React from 'react'
import PricingSVG from "../../assets/priceSVG.svg"
import RepairingSVG from "../../assets/repairSVG.svg"
import GearSVG from "../../assets/gearSVG.svg"
import HomeSVG from "../../assets/homeSVG.svg"
import UserSVG from "../../assets/userSVG.svg"
import GroupSVG from "../../assets/groupSVG.svg"
import './WhyChooseUs.scss'

const WhyChooseUs = () => {
  return (
    <div className="ts-choose-us">
        <div className="ts-choose-us__container container">
            <h1 className="ts-choose-us__title title-primary">Why Choose Us</h1>
            <p className="ts-choose-us__text subtitle-primary">There are many variations of passages of Lorem Ipsum available, but the majority have.</p>
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
  )
}

export default WhyChooseUs