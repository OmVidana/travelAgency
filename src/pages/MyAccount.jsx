import NavBar from "../components/global/NavBar";
import "./MyAccount.scss";
import React, {useContext} from "react";
import AuthContext from "../context/AuthContext";

function MyAccount() {
    let {name} = useContext(AuthContext)
    return (
        <>
            <NavBar/>
            <div className="account-page">
                <h1>Hola {name}</h1>
                <div className="account-container">
                    <i className="fa-solid fa-circle-user user-icon"></i>
                    <form>
                        <input
                            type="email"
                            placeholder="Correo"
                            name="editEmail"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Nombre"
                            name="editName"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            name="editPwd"
                            required
                        />
                        <button className="modify-button" type="submit">Modificar</button>
                    </form>
                    <div className="account-flights-hotels">
                        <a href="/micuenta/vuelos" className="account-consults">Vuelos Pendientes.</a>
                        <a href="/micuenta/hoteles" className="account-consults">Reservaciones Pendientes.</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyAccount;
