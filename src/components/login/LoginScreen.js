import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';


const LoginScreen = () => {

  const { dispatch } = useContext( AuthContext )
  const navigate = useNavigate()

  const handleLogin = () =>{

    const action = {
      type: types.login,
      paylod: {
        name: 'B. Santiago'
      }
    }
    
    dispatch( action )


    const lastPath = localStorage.getItem('heroesreact_lastpath') || '/marvel'
    
    navigate(lastPath, {
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