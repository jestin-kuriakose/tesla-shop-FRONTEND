import React from 'react'
import './Login.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
        <Header/>
        <div className='login'>
        <div className="login__container container">
            <form action="submit" className='login__form'>
            <h1 className='login__form__heading title-primary'>Login</h1>
            <input className='login__form__email' type="email" name="email" id="email" placeholder='Email'/>
            <input className='login__form__password' type="password" name="password" id="password" placeholder='Password' />
            <button type="submit" className='login__form__btn btn-primary'>LOGIN</button>
            <Link to={'/register'} className='login__form__register subtitle-primary'>New user ? Register here !</Link>
            </form>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Login