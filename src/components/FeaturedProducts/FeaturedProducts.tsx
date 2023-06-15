import React from 'react'
import './FeaturedProducts.scss'
import { Link } from 'react-router-dom'
import iPhone from '../../assets/iphone.jpg'
import { featuredPhones } from '../../data'

const FeaturedProducts = () => {
  return (
    <div className="featured-products">
      <div className="featured-products__container container">
        <h3 className='featured-products__title title-primary'>Featured Products</h3>
        <p className="featured-products__text subtitle-primary">Check out some of the featured products !</p>
        <div className="featured-products__phones">
          {featuredPhones?.map((phone:any)=>(
            <Link to={`/product/${phone.id}`}>
            <div id={phone.id} className="featured-products__phone">
              <img src={iPhone} className="featured-products__phone__img"/>
              <h3 className='featured-products__phone__title'>{phone.title}</h3>
              <p className='featured-products__phone__price'>$ {phone.price}</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts