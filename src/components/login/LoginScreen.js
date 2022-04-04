import React from 'react'
import { useNavigate } from 'react-router-dom';


const LoginScreen = () => {

  const navigate = useNavigate()

  const handleLogin = () =>{
    navigate('/marvel', {
      replace: true
    })
  }

  return (
    <div className='container mt-5'>
        <h1>Login</h1>
        <hr/>
        <button onClick={ handleLogin } className='btn btn-primary'>Login</button>
    </div>
  )
}

export default LoginScreen