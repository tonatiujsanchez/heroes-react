import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext"



const PublicRoute = ({ children }) => {

    const { user } = useContext( AuthContext )

    console.log( user.logged );
    return (
        user.logged
            ? <Navigate to="/marvel" />
            : children
    )
}

export default PublicRoute