import NavBar from "../components/global/NavBar";
import "./MyAccount.scss";

function MyAccount() {
    return (
        <div className="myaccount-page">
            <NavBar/>
            <div className="account-container">
                <img src="/userIcon.svg" alt="User Icon" width="100px" height="100px" />  
            </div>
        </div>
    );
}

export default MyAccount;
