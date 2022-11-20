// import './Home.scss';
import './prueba.css'
import Card from "../components/Results/FlightCard";
import { useLocation } from 'react-router-dom';

function Results(props) {
    // let data = props.data['data']
    const {state} = useLocation();
    const { data } = state;

    return (
        <div id="container">
              {data.map((flight) => (
                  <Card
                    arrival={flight['salida']}
                    departure={flight['llegada']}
                    arrivalt={flight['tsalida']}
                    departuret={flight['tllegada']}
                    price={flight['precio']}
                  />
              ))}
        </div>
    );
}

export default Results;