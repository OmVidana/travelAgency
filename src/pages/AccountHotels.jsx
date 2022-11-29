import NavBar from "../components/global/NavBar";
import "./AccountHotels.scss";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import HotelCard from "../components/hotels/HotelCard";
import "../pages/Hotels.scss";

function AccountHotels() {
  const [data, setData] = useState([]);
  let { user } = useContext(AuthContext);

  useEffect(() => {
    // Send data to the backend via POST
    fetch(`http://127.0.0.1:8000/hoteles/usuario/${user.username}`, {
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
      <div className="hotels-search-view">
        <NavBar />
        {data.map((hotel, index) => (
          <HotelCard
            key={index}
            id={hotel["id"]}
            name={hotel["Nombre"]}
            checkIn={hotel["Llegada"]}
            checkOut={hotel["Salida"]}
            info={hotel["Descripcion"]}
          />
        ))}
      </div>
    </>
  );
}

export default AccountHotels;
