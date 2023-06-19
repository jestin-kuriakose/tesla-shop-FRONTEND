import React from 'react'
import './ContactForm.scss'

const ContactForm = () => {
  return (
    <div className='contact'>
        <h3 className='contact__title title-primary'>Contact Us</h3>
        <div className="contact__container container">
            <form action="" className="contact__form">
                <h3 className="contact__form__title subtitle-primary">Looking for help ? Contact Us!</h3>
                <input type="text" className="contact__form__name" placeholder='Enter your Full Name'/>
                <input type="email" className="contact__form__email" placeholder='Enter your email address'/>
                <input type="number" className="contact__form__phone" placeholder='Enter your contact number'/>
                <textarea name="message" id="message" className='contact__form__message' rows={10} placeholder='Write your message here'></textarea>
                <button type="submit" className='contact__form__btn btn-primary'>Send</button>
            </form>
            <div className="contact__map">
                <img className='contact__map__img' src="https://maps.googleapis.com/maps/api/staticmap?center=43.4267263,-80.4261776&zoom=14&size=1280x1280
                        &markers=color:red%7Clabel:T%7C43.4267263,-80.4261776&key=AIzaSyDUxOUEkQ__V3rDYZZMfxz_qI_S1ypBenM" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ContactForm