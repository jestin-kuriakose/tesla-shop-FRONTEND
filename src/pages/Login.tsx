import React from 'react'
import Header from '../components/Header'

const Login = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <form action="submit" className='login-form'>
          <h1>Login</h1>
          <input type="email" name="email" id="email" placeholder='Email'/>
          <input type="password" name="password" id="password" placeholder='Password' />
          <button type="submit" className='btn-primary'>LOGIN</button>
          <a href="#">New user ? Register here !</a>
        </form>
      </div>
    </>
  )
}

export default Login