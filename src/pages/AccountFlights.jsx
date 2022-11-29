import NavBar from "../components/global/NavBar";
import FlightCard from "../components/Results/FlightCard";
import "./AccountFlights.scss";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

function AccountFlights() {
  const [data, setData] = useState([]);
  let { user } = useContext(AuthContext);

  useEffect(() => {
    // Send data to the backend via POST
    fetch(`http://127.0.0.1:8000/vuelos/usuario/${user.username}`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      // .then(data => console.log(data['data']));
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="accountflights-page">
        <NavBar />
        {data.map((flight, index) => (
          <FlightCard
            key={index}
            id={flight["id"]}
            arrival={flight["Salida"]}
            departure={flight["Llegada"]}
            arrivalt={flight["Tiempo_llegada"]
              .slice(0, -1)
              .split("T")[1]
              .slice(0, -3)}
            departuret={flight["Tiempo_salida"]
              .slice(0, -1)
              .split("T")[1]
              .slice(0, -3)}
          />
        ))}
      </div>
    </>
  );
}

export default AccountFlights;
