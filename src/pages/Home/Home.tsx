import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import GivingLifeHero from '../../components/GivingLifeHero/GivingLifeHero'
import AboutUsHero from '../../components/AboutUsHero/AboutUsHero'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'

const Home = () => {
  return (
    <>
        <Header/>
        <GivingLifeHero/>
        <AboutUsHero/>
        <FeaturedProducts/>
        <Footer/>
    </>
  )
}

export default Home