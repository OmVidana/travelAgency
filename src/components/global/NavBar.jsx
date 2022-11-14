import { NavBarContent } from '../NavBarContent';
import './NavBar.scss'

function NavBar() {
    return (
        <div className='navBar'>
            <nav className='navBar-spaces'>
                <a className='navBar-space-main' href='/home'>Yorick Travels <i className='navBar-main-icon fa-solid fa-plane-up'></i></a>
                <div className='navBar-space-content'>
                    <ul className='navBar-space-elements'>
                        {NavBarContent.map((item, index) => {
                            return(
                                    <li key={index}>
                                        <a className={item.className} href={item.url}><i className={item.icon}></i>{item.title}</a>
                                    </li>
                            );
                        })}
                    </ul>
                    <a className='login-button' href='/login'>Log In</a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;