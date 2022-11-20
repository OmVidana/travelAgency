import './AvailableFlights.scss';
import NavBar from '../components/global/NavBar';
import FlightCard from '../components/Results/FlightCard';
function AvailableFlights() {
    return(
        <>
            <NavBar/>
            <div className='avFlights-page'>   
                    <h1>Vuelos Dispobibles:</h1>
                    <FlightCard/>
            </div>
        </>
    );
}

export default AvailableFlights;