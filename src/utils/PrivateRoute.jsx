import {Outlet, Navigate} from "react-router-dom";

const privateRoute = ({ children }) => {
    console.log('Private')
    let auth = {'token':true}
    return(
        auth.token ? children : <Navigate to='/'/>
    )
}

export default privateRoute;
