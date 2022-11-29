import './LogIn.scss';
import React, {useContext}  from "react";
import AuthContext from "../context/AuthContext";
import {Navigate} from "react-router-dom";

function LogIn() {
    let {loginUser} = useContext(AuthContext)
    return (
        <div className="login-page">
            <div className="login-container">
                <form className="login-form" onSubmit={loginUser}>
                    <h1>Log In</h1>
                    <input
                        type="text"
                        placeholder="User"
                        name="email"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="pwd"
                        required
                    />
                    <button className="login-button" type="submit">Ingresar</button>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
