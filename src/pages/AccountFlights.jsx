import NavBar from "../components/global/NavBar";
import "./AccountFlights.scss";

function AccountFlights() {
    return (
        <div className="accountflights-page">
            <NavBar/>
            <div className="accountflight-container">
                <div className='accountflight-origin'>
                    <p>GDL</p>
                    <p>14:30</p>
                    <img src='' alt='Airlane Logo'/>
                </div>
                <div className='accountflight-arrow'>
                    <span><i class="fa-solid fa-arrow-right-long"></i></span>
                </div>
                <div className='accountflight-destination'>
                    <p>CDMX</p>
                    <p>10:30</p>
                    <img src='' alt='Airlane Logo'/>
                </div>
                <div className='accountflight-price'>
                    <p>$150</p>
                </div>
            </div>
        </div>
    );
}

export default AccountFlights;
