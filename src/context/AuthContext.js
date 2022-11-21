import {createContext, useState, useEffect} from "react";
import jwtDecode from "jwt-decode";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({children})=> {
    let [authTokens, setAuthTokens] = useState(null)
    let [user, setUser] = useState(null)
    let navigate = useNavigate()

    let loginUser = async (e )=> {
        e.preventDefault()
        console.log('Submiteada')
        let response = fetch('http://127.0.0.1:8000/api/token/', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':e.target.email.value, 'password':e.target.pwd.value})
        })
            .then((response)=> {
                let data = response.json()
                if(response.status === 200){
                    data.then((values) => {
                        setAuthTokens(values)
                        setUser(jwtDecode(values.access))
                        navigate('/')
                    })
                }else{
                    alert('Something went wrong!')
                }
            })
        // let data = (await response).json()

    }

    let contextData = {
        user:user,
        loginUser:loginUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}