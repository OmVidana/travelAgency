import "./NavBar.scss";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

function NavBar() {
    let { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className="navBar">
            <div className="navBar-space-title">
                <a className="navBar-space-main">
                    Yorick Travels{" "}
                    <i className="navBar-main-icon fa-solid fa-plane-up"></i>
                    <i className="navBar-responsive-button fa-solid fa-xmark"></i>
                    <i className="navBar-responsive-button fa-solid fa-bars"></i>
                </a>
            </div>
            <div className="navBar-space-content">
                <a className="navBar-space-page" href="/">
                    <i className="navBar-icons fa-sharp fa-solid fa-house"></i>
                    Home
                </a>
                <a className="navBar-space-page" href="/hoteles">
                    <i className="navBar-icons fa-solid fa-hotel"></i>
                    Hoteles
                </a>
                {user ? (
                    <a className="navBar-space-page" href="/signup">
                        <i className="navBar-icons fa-solid fa-user"></i>Cerrar Sesión
                    </a>
                ) : (
                    <a className="navBar-space-page" href="/">
                        <i className="navBar-icons fa-solid fa-user"></i>Sign Up
                    </a>
                )}
                {user ? (
                    <a className="login-button" href="/micuenta">
                        {user.username}
                    </a>
                ) : (
                    <a className="login-button" href="/login">
                        Log In
                    </a>
                )}
                {/*<a className='login-button' href='/login'>Log In</a>*/}
            </div>
        </div>
    );
}

export default NavBar;
