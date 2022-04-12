import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoute from "./DashboardRoute";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";



const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/login" element={<LoginScreen />} /> */}
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />



                <Route path="/*" element ={ 
                    <PrivateRoute>
                        <DashboardRoute />
                    </PrivateRoute> } />

                {/* <Route path="/*" element ={ <DashboardRoute /> } /> */}
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter