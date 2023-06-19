import React from 'react'
import './Register.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <>
        <Header/>
        <div className='register'>
        <div className="register__container container">
            <form action="submit" className='register__form'>
            <h1 className='register__form__heading title-primary'>Register</h1>
            <input className='register__form__fname' type="text" name="fname" id="fname" placeholder='First Name'/>
            <input className='register__form__lname' type="text" name="lname" id="lname" placeholder='Last Name'/>
            <input className='register__form__email' type="email" name="email" id="email" placeholder='Email'/>
            <input className='register__form__password' type="password" name="password" id="password" placeholder='Password' />
            <button type="submit" className='register__form__btn btn-primary'>Sign up</button>
            <Link to={'/login'} className='register__form__login subtitle-primary'>Already signed up ? Login here !</Link>
            </form>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Register