import './LogIn.scss';
import React, {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import {Navigate, useNavigate} from "react-router-dom";
import jwtDecode from "jwt-decode";

function LogIn() {
    let [authTokens, setAuthTokens] = useState(()=>localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')):null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')):null)
    let navigate = useNavigate()
    function handlelog(event) {
        event.preventDefault()
        let formdata = JSON.stringify(
            {   
                'email':event.target.user.value,
                'username':event.target.email.value ,
                'password':event.target.pwd.value})
        // Send data to the backend via POST
        fetch(' http://127.0.0.1:8000/users/', {

            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body:formdata
        })
        .then((response)=> {
            let data = response.json()
            if(response.status === 200){
                navigate("/login")
                
            }else{
                alert('Something went wrong 1!')
            }
        })
    }
    return (
        <div className="login-page">
            <div className="login-container">
                <form className="login-form" onSubmit={handlelog}>
                    <h1>Sign Up</h1>
                    <input
                        type="text"
                        placeholder="Correo"
                        name="email"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Usuario"
                        name="user"
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
