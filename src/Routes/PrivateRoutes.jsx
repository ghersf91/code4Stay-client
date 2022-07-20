import { useContext } from "react"
import { Navigate, Outlet } from 'react-router-dom'
import Loader from "./../Components/Loader/Loader"
import { AuthContext } from './../Context/auth.context'
function PrivateRoute() {

    const { isLoading, user } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (!user) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default PrivateRoute