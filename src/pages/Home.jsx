import './Home.scss';
import NavBar from '../components/global/NavBar';
import {useContext} from "react";
import AuthContext from "../context/AuthContext";

function Home() {
        let {user} = useContext(AuthContext)
        console.log(user)
    return (
        <div className='home-page'>
            <NavBar/>
            {/*<h1>{user.username}</h1>*/}
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
            <h1>Bien venido.</h1>
        </div>
    );
}

export default Home;