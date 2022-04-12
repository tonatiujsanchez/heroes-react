import { useEffect, useReducer } from "react"
import { AuthContext } from "./auth/authContext"
import { authReducer } from "./auth/authReducer"
import AppRouter from "./routers/AppRouter"


const keyStorage = '1649706090096_heroesreact_user'
const init = () => {

  return JSON.parse( localStorage.getItem(keyStorage) ) || { logged: false }
}

const HeroesApp = () => {


  const [ user, dispatch ] = useReducer( authReducer, {}, init )

  useEffect(()=>{
    if( !user ) return
    localStorage.setItem( keyStorage, JSON.stringify( user ) )
  },[ user ])


  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }} >
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default HeroesApp