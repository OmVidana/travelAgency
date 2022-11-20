import './NavBar.scss'

function NavBar() {
    return (
        <div className='navBar'>
            <nav className='navBar-spaces'>
                <a className='navBar-space-main' href='/'>Yorick Travels <i className='navBar-main-icon fa-solid fa-plane-up'></i></a>
                <div className='navBar-space-content'>
                    <ul className='navBar-space-elements'>
                        <li>
                            <a className="navBar-space-page" href="/"><i className="navBar-icons fa-sharp fa-solid fa-house"></i>Home</a>
                        </li>
                        <li>
                            <a className="navBar-space-page" href="/search"><i className="navBar-icons fa-sharp fa-solid fa-search"></i>Vuelos</a>
                        </li>
                        <li>
                            <a className="navBar-space-page" href="/hoteles"><i className="navBar-icons fa-solid fa-hotel"></i>Hoteles</a>
                        </li>
                        <li>
                            <a className="navBar-space-page" href="/signup"><i className="navBar-icons fa-solid fa-user"></i>Sign Up</a>
                        </li>
                    </ul>
                    <a className='login-button' href='/login'>Log In</a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;