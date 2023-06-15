import React from 'react'
import './AboutUsHero.scss'
import ShopImage from '../../assets/shop.jpg'

const AboutUsHero = () => {
  return (
    <div className="aboutus">
      <div className="aboutus__container container">
        <div className="aboutus__left">
          <div className="aboutus__left__img">
            <img src={ShopImage} alt="" />
            <span className="aboutus__left__img__bg"></span>
          </div>
        </div>
        <div className="aboutus__right">
          <h3 className='aboutus__right__title title-primary'>About Tesla</h3>
          <p className='aboutus__right__text subtitle-primary'>Our vision is to provide the highest quality and the most-up-to-date gadgets available in the market. We believe that technology enhances people’s lives so we ensure that we make it readily available to everyone – anytime, anywhere. With a vast selection of gadgets and accessories, we will be your one-stop shop for all your technology needs.</p>
          {/* <p className='aboutus__right__text subtitle-primary'>We are your one-stop shop for all your technology needs, and your up-to-date tech news. With guaranteed low prices and daily support available, you can be assured that you will be making the best purchase decision.</p> */}
          <button className='aboutus__right__btn btn-primary'>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUsHero