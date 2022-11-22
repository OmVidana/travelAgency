// import './Home.scss';
import './Results.scss'
import FlightCard from "../components/Results/FlightCard";
import { useLocation } from 'react-router-dom';
import NavBar from '../components/global/NavBar';

function Results(props) {
    // let data = props.data['data']
    const {state} = useLocation();
    const { data } = state;

    return (
        <>
            <NavBar/>
            <div className='results-page'>   
            {data.map((flight, index) => (
                <FlightCard
                    key={index}
                    arrival={flight['salida']}
                    departure={flight['llegada']}
                    arrivalt={flight['tsalida']}
                    departuret={flight['tllegada']}
                    price={flight['precio']}
                    fsalida={flight['fsalida']}
                    fllegada={flight['fllegada']}
                />
             ))}
            </div>
        </>
    );
}

export default Results;