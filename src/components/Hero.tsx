import React from 'react'
import HeroImg from '../assets/iphone.jpg'
import bg from '../assets/bg2.jpg'
import Logo from '../assets/logo.jpg'
import ShopImage from '../assets/shop.jpg'
import { Link } from 'react-router-dom'
import {featuredPhones} from '../data.js'
import iPhone from '../assets/iphone.jpg'

const Hero = () => {
  console.log(featuredPhones)
  return (
    <>

    {/* Hero Section */}

    <div className='hero'>
        <div className="hero_container">
            <div className="left">
                <h2 className='left_title'>Giving Life to Used Smartphones</h2>
                <Link to={'/repair'}><button className='left_button'>Shop now</button></Link>
            </div>
            <div className="right">
                <img className='right_img' src={''} alt="" />
            </div>
        </div>
    </div>

    {/* About Section */}

    <div className="about">
      <div className="about_container">
        <div className="left">
          <div className="left_image">
            <img src={ShopImage} alt="" />
          </div>
        </div>
        <div className="right">
          <h3>About Tesla</h3>
          <p>Our vision is to provide the highest quality and the most-up-to-date gadgets available in the market. We believe that technology enhances people’s lives so we ensure that we make it readily available to everyone – anytime, anywhere. With a vast selection of gadgets and accessories, we will be your one-stop shop for all your technology needs.</p>
          <p>We are your one-stop shop for all your technology needs, and your up-to-date tech news. With guaranteed low prices and daily support available, you can be assured that you will be making the best purchase decision.</p>
          <button className='btn-primary'>Read more</button>
        </div>
      </div>
    </div>

    {/* Featured Section */}

    <div className="featured">
      <div className="featured_container">
        <h3>Featured Products</h3>
        <div className="featured_phones">
          {featuredPhones?.map((phone:any)=>(
            <Link to={`/product/${phone.id}`}>
            <div id={phone.id} className="product">
              <img src={iPhone} className="product_image"/>
              <h3 className='product_title'>{phone.title}</h3>
              <p className='product_price'>$ {phone.price}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* Newsletter Section */}
    
    <div className="newsletter">
      <div className="newsletter_container">
        <h3>Stay up to date !</h3>
        <p>Subscribe your email now to recieve all the news about Tesla.</p>
        <input type="email" name="" id="" placeholder='Email' />
        <button className='btn-primary'>Submit</button>
      </div>
    </div>

    

    </>
  )
}

export default Hero