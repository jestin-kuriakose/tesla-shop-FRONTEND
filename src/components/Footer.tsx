import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo-inv.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_container">
            <div className="footer_contents">
                <div className="footer_logo">
                    <img className='footer_logo_img' src={Logo} alt="" />
                </div>
                <ul className="footer_links">
                    <h3>Quick Links</h3>
                    <Link to={'/'}><li className="footer_link">Home</li></Link>
                    <Link to={'/products'}><li className="footer_link">Shop</li></Link>
                    <Link to={'/contact'}><li className="footer_link">Contact</li></Link>
                </ul>
                <form className="footer_form">
                    <h3>Send us a message</h3>
                    <input type="text" className="name" placeholder='Your Name' />
                    <input type="email" className="email" placeholder='Your Email' />
                    <textarea name="message" id="" cols="30" rows="10" className="message" placeholder='Your Message'></textarea>
                    <button className='btn-primary' type="submit">Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Footer