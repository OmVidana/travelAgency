import NavBar from "../components/global/NavBar";
// import "./FlightSearch.scss";
import React, { useState } from "react";
// import OptionField from "../components/Search/OptionField";
// import {Autocomplete} from "@mui/material";
import OptionField from "../components/Search/OptionField";
import "./HotelSearch.scss";
import { useNavigate } from "react-router-dom";
import Loader from "../components/global/Loader";

function HotelSearch(props) {
  const [salida, setSalida] = useState("");
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    setLoading(true);

    console.log("t");
    // Send data to the backend via POST
    fetch(`http://127.0.0.1:8000/cityHotels/${salida.split(',')[0]}`, {
    // fetch(`http://127.0.0.1:8000/cityHotels/GDL`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adults: event.target.ciudad.value,
        checkInDate: event.target.Llegada.value,
        checkOutDate: event.target.Salida.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // setOffers(data['offers'])
        // console.log(offers[0].hotel)
        console.log(data);
        navigate("/hotelResults", { state: data });
      });
    // .then(data => console.log(data['data']));
    //     .then(data => setTitle(data['json1']));
    // return redirect("/home");
  }

  return (
    <>
      <div className="Page">
        <NavBar></NavBar>
        <Loader flag={loading} />
        <div className="hotels-container">
          <div className="hotels-search-bar">
            <h2>Búsqueda de Hotel</h2>
            <form className="hotels-search-form" onSubmit={handleClick}>
              <OptionField text={"Ciudad"} state={setSalida}></OptionField>
              <input
                className="nm"
                type="text"
                placeholder="Adultos"
                name="ciudad"
              />
              <input className="nm" type="date" name="Llegada" />
              <input className="nm" type="date" name="Salida" />
              <button className="hotels-search-button" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelSearch;
