import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function HotelCard(props) {
  let { user } = useContext(AuthContext);
  let navigate = useNavigate();

  function handleBuy(event, value) {
    if (!user) {
      navigate("/login");
    }
    console.log(props);
    let formData = JSON.stringify({
      Usuario: user.username,
      Nombre: props.name,
      Llegada: props.checkIn,
      Salida: props.checkOut,
      Descripcion: props.info,
    });

    console.log(props);
    // Send data to the backend via POST
    fetch(" http://127.0.0.1:8000/hoteles/", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: formData, // body data type must match "Content-Type" header
    }).then((response) => response.json());
    navigate("/micuenta/hoteles");
  }

  function handleDel(event, value) {
    if (!user) {
      navigate("/login");
    }
    let formData = JSON.stringify({
      id: props.id,
    });
    console.log(props);
    // Send data to the backend via POST
    fetch(" http://127.0.0.1:8000/hoteles/", {
      method: "DELETE",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: formData, // body data type must match "Content-Type" header
    }).then((response) => response.json());
    navigate(0);

  }

  return (
    <div className="hotel-preview">
      <h1>{props.name}</h1>
      <div className="dates">
        <p>{props.checkIn}</p>
        <p>{props.checkOut}</p>
      </div>
      <p>{props.info}</p>
      <p className="price">{props.price}</p>
      {props.type ? (
        <button
          className="buy-button hotel-button"
          type="button"
          onClick={handleBuy}
        >
          Comprar
        </button>
      ) : (
        <button
          className="cancel-button hotel-button"
          type="button"
          onClick={handleDel}
        >
          Cancelar
        </button>
      )}
    </div>
  );
}

export default HotelCard;
