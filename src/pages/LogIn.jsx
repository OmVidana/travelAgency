import './LogIn.scss';

function LogIn() {
    return (
        <div className="login-page">
            <div className="login-container">
                <form className="login-form">
                    <h1>Log In</h1>
                    <input
                        type="email"
                        placeholder="Correo"
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
