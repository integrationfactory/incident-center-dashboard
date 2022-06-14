import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../services/AuthProvider";

const ProtectedRoute = ({ children }) => {
    var token = sessionStorage.getItem('token')
    const location = useLocation();

    console.log(token)

    if (token==null){
        console.log("navigating")
        return <Navigate to="/login" replace state={{from: location}}/>
    }

    return children

};

export default ProtectedRoute;
