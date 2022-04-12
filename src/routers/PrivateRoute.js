import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/authContext"



const PrivateRoute = ({ children }) => {

    const { user } = useContext( AuthContext )
    const location = useLocation()

    
    const currentPath = location.pathname + location.search
    localStorage.setItem('heroesreact_lastpath', currentPath)


    return (
        user.logged
            ? children
            : <Navigate to="/login" />
    )
}

export default PrivateRoute