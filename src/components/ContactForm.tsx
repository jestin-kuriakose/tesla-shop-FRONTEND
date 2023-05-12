import React from 'react'

const ContactForm = () => {
  return (
    <div className='contact'>
        <h3 className='contact_title'>Contact Us</h3>
        <div className="contact_container">
            <form action="" className="contact_form">
                <h3>Looking for help ? Contact Us!</h3>
                <input type="text" className="name" placeholder='Enter your Full Name'/>
                <input type="email" className="email" placeholder='Enter your email address'/>
                <input type="number" className="phone" placeholder='Enter your contact number'/>
                <textarea name="message" id="message" rows={"10"} placeholder='Write your message here'></textarea>
                <button type="submit" className='btn-primary'>Send</button>
            </form>
            <div className="vertical-line"></div>
            <div className="map">
                <img src="https://maps.googleapis.com/maps/api/staticmap?center=43.4267263,-80.4261776&zoom=14&size=1280x1280
                        &markers=color:red%7Clabel:T%7C43.4267263,-80.4261776&key=AIzaSyDUxOUEkQ__V3rDYZZMfxz_qI_S1ypBenM" alt="" />
            </div>
        </div>
        

        
    </div>
  )
}

export default ContactForm

// https://maps.googleapis.com/maps/api/staticmap?center=43.4267263,-80.4261776&zoom=14&size=1000x400&key=AIzaSyDUxOUEkQ__V3rDYZZMfxz_qI_S1ypBenM&markers=color:blue