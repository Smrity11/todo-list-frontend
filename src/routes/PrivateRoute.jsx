/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate ,useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



const PrivateRoute = ({children}) => {
    const {user ,loading} =useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname);
    if(loading){
        return <span className="loading loading-spinner loading-lg flex h-[90vh] items-center my-auto mx-auto"></span>
    }
    if(user){
        return children
    }

    return (
        <div>
             return <Navigate state={location.pathname} to="/login"></Navigate>;
        </div>
    );
};

export default PrivateRoute;