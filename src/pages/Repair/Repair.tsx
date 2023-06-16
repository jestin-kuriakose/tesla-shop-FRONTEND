import React from 'react'
import "./Repair.scss"
import Header from "../../components/Header/Header"
import Hero from '../../components/Hero/Hero'
import RepairSelect from '../../components/RepairSelect/RepairSelect'
import RepairContactHero from '../../components/RepairContactHero/RepairContactHero'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Footer from '../../components/Footer/Footer'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import AboutUsHero from '../../components/AboutUsHero/AboutUsHero'
import GivingLifeHero from '../../components/GivingLifeHero/GivingLifeHero'

const Repair = () => {

  return (
    <>
        <Header/>
        {/* <Hero/> */}
        <RepairContactHero/>
        <RepairSelect/>
        <WhyChooseUs/>
        <Footer/>
    </>
  )
}

export default Repair