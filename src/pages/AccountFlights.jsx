import NavBar from "../components/global/NavBar";
import FlightCard from "../components/Results/FlightCard";
import "./AccountFlights.scss";

function AccountFlights() {
    return (
        <>    
            <NavBar/>
            <div className="accountflights-page">
                <FlightCard/>
            </div>
        </>
    );
}

export default AccountFlights;
