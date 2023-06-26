import React from 'react'
import Phone1 from "../../assets/phone1.png"
import Phone2 from "../../assets/phone2.png"
import Phone3 from "../../assets/phone3.png"
import Phone4 from "../../assets/phone4.png"
import "./RepairSelect.scss"

const RepairSelect = () => {
  return (
    <div className="ts-device-select">
        <div className="ts-device-select__container container">
            <h1 className="ts-device-select__heading title-primary">What we can fix for you</h1>
            <p className="ts-device-select__subheading subtitle-primary">Select the type of device you want us to fix for you !</p>
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
                    <h3 className="ts-device-select__device__title">Samsung Repair</h3>
                    <p className="ts-device-select__device__text">
                        From liquid damage to cracked screens, 
                        we provides high-quality, affordable
                        repair services
                    </p>
                </div>
                <div className="ts-device-select__device">
                    <img src={Phone3} alt="" className="ts-device-select__device__img" />
                    <h3 className="ts-device-select__device__title">iPad Repair</h3>
                    <p className="ts-device-select__device__text">
                        From liquid damage to cracked screens, 
                        we provides high-quality, affordable
                        repair services
                    </p>
                </div>
                <div className="ts-device-select__device">
                    <img src={Phone4} alt="" className="ts-device-select__device__img" />
                    <h3 className="ts-device-select__device__title">Macbook Repair</h3>
                    <p className="ts-device-select__device__text">
                        From liquid damage to cracked screens, 
                        we provides high-quality, affordable
                        repair services
                    </p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default RepairSelect