import {Outlet, Navigate} from "react-router-dom";
import React, {useContext} from "react";
import AuthContext from "../context/AuthContext";




function PrivateRoute({children}) {
    let {user} = useContext(AuthContext)
    // console.log('Private')
    // let auth = {'token':false}
    // console.log(user.username)
    return (
            user ? children : <Navigate to='/'/>
    );
}

export default PrivateRoute;

