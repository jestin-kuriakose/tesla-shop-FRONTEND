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
            <p className="ts-choose-us__text subtitle-primary">There are many reasons why you should choose Tesla Electronics.</p>
            <div className="ts-choose-us__lists">
                <div className="ts-choose-us__list">
                    <img className='ts-choose-us__list__img' src={PricingSVG} alt="" />
                    <h3 className="ts-choose-us__list__title">Limited lifetime guarantee</h3>
                    <p className="ts-choose-us__list__text">
                        Most repairs are backed by a lifetime warranty on all parts and labour.
                    </p>
                </div>
                <div className="ts-choose-us__list">
                    <img className='ts-choose-us__list__img' src={RepairingSVG} alt="" />
                    <h3 className="ts-choose-us__list__title">Premium quality parts</h3>
                    <p className="ts-choose-us__list__text">
                        Our technicians are certified to repair your devices by the world’s largest manufacturers using state of the art tools and diagnostics.
                    </p>
                </div>
                <div className="ts-choose-us__list">
                    <img className='ts-choose-us__list__img' src={GearSVG} alt="" />
                    <h3 className="ts-choose-us__list__title">Commitment to Data Security</h3>
                    <p className="ts-choose-us__list__text">
                        We have policies and processes in place to ensure your personal data is safe. All techs are bonded and trained on data and privacy protection.
                    </p>
                </div>
                <div className="ts-choose-us__list">
                    <img className='ts-choose-us__list__img' src={HomeSVG} alt="" />
                    <h3 className="ts-choose-us__list__title">Free diagnosis and quote</h3>
                    <p className="ts-choose-us__list__text">
                        Immediate quote and diagnosis in case of damage or breakdown.
                    </p>
                </div>
                <div className="ts-choose-us__list">
                    <img className='ts-choose-us__list__img' src={UserSVG} alt="" />
                    <h3 className="ts-choose-us__list__title">Expertise</h3>
                    <p className="ts-choose-us__list__text">
                        From providing 64-point inspections to protecting your privacy, you can trust our expert technicians.
                    </p>
                </div>
                <div className="ts-choose-us__list">
                    <img className='ts-choose-us__list__img' src={GroupSVG} alt="" />
                    <h3 className="ts-choose-us__list__title">Great Support</h3>
                    <p className="ts-choose-us__list__text">
                        We provide you with great support after the device has been repaired.
                    </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs