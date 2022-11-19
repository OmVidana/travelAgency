import './AvailableFlights.scss';
import NavBar from '../components/global/NavBar';
function AvailableFlights() {
    return(
        <div className='avFlights-page'>
            <NavBar/>
            <h1>Vuelos Disponibles</h1>
            <div className='flight-container'>
                <div className='flight-origin'>
                    <p>GDL</p>
                    <p>14:30</p>
                    <img src='' alt='Airlane Logo'/>
                </div>
                <div className='flight-arrow'>
                    <span><i class="fa-solid fa-arrow-right-long"></i></span>
                </div>
                <div className='flight-destination'>
                    <p>CDMX</p>
                    <p>10:30</p>
                    <img src='' alt='Airlane Logo'/>
                </div>
                <div className='flight-price'>
                    <p>$150</p>
                </div>
            </div>
        </div>
    );
}

export default AvailableFlights;