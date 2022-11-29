import "./FlightCard.scss";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function FlightCard(props) {
  let { user } = useContext(AuthContext);
  let navigate = useNavigate();

  function handleBuy(event, value) {
    // console.log(event.target.value)
    if (!user) {
      navigate("/login");
    }
    console.log(props);
    let formData = JSON.stringify({
      Usuario: user.username,
      Aerolinea: "Yorick",
      Salida: props.departure,
      Llegada: props.arrival,
      Tiempo_salida: props.fsalida + " " + props.departuret,
      Tiempo_llegada: props.fllegada + " " + props.arrivalt,
      Asiento: "Prueba",
      Maletas: 1,
    });

    console.log(props);
    // Send data to the backend via POST
    fetch(" http://127.0.0.1:8000/vuelos/", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: formData, // body data type must match "Content-Type" header
    }).then((response) => response.json());
    // .then(data => console.log(data['data']));
    // .then(data => setTitle(data['json1']));
    navigate("/micuenta/vuelos");
  }

  function handleDel(event, value) {
    // console.log(event.target.value)
    if (!user) {
      navigate("/login");
    }
    let formData = JSON.stringify({
      id: props.id,
    });
    console.log(props);
    // Send data to the backend via POST
    fetch(" http://127.0.0.1:8000/vuelos/", {
      method: "DELETE",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: formData, // body data type must match "Content-Type" header
    }).then((response) => response.json());
    navigate(0);

    // .then(data => console.log(data['data']));w
    // .then(data => setTitle(data['json1']));
  }

  return (
    <div className="flight-container">
      <div className="flight-origin">
        <p id="dest">{props.departure}</p>
        <p id="arr">{props.arrival}</p>
        {/*<img src='' alt='Airlane Logo'/>*/}
      </div>
      {/*<div className='flight-arrow'>*/}
      {/*    <span><i className="fa-solid fa-arrow-right-long"></i></span>*/}
      {/*</div>*/}
      <div className="flight-destination">
        <p id="destime">{props.departuret}</p>
        <p id="destime">{props.arrivalt}</p>
        {/*<img src='' alt='Airlane Logo'/>*/}
      </div>
      <div className="flight-price">
        <p>{props.price}</p>
        {props.type ? (
          <button
            className="buy-button flight-button"
            type="button"
            onClick={handleBuy}
          >
            Comprar
          </button>
        ) : (
          <button
            className="cancel-button flight-button"
            type="button"
            onClick={handleDel}
          >
            Cancelar
          </button>
        )}
      </div>
    </div>
  );
}

export default FlightCard;
