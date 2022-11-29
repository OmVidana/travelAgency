import NavBar from "../components/global/NavBar";
// import "./FlightSearch.scss";
import React, { useState } from "react";
import Field from "../components/Search/Field";
// import OptionField from "../components/Search/OptionField";
// import {Autocomplete} from "@mui/material";
import OptionField from "../components/Search/OptionField";
import "./HotelSearch.scss";
import HotelCard from "../components/hotels/HotelCard";
import {useNavigate} from "react-router-dom";



function HotelSearch(props) {
    const [salida, setSalida] = useState('')
    const [offers, setOffers] = useState([])
        const navigate = useNavigate();


    function handleClick(event) {
        event.preventDefault();
        console.log('t')
        // Send data to the backend via POST
        // fetch(`http://127.0.0.1:8000/cityHotels/${salida.split(',')[0]}`, {
        fetch(`http://127.0.0.1:8000/cityHotels/GDL`, {
            method: "POST",
            mode: "cors",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'adults':event.target.ciudad.value,
                'checkInDate':event.target.Llegada.value,
                'checkOutDate':event.target.Salida.value
            })

        })
            .then((response) => response.json())
            .then((data) => {
                // setOffers(data['offers'])
                // console.log(offers[0].hotel)
                console.log(data)
                navigate("/hoteles", { state: data })
            });
        // .then(data => console.log(data['data']));
        //     .then(data => setTitle(data['json1']));
        // return redirect("/home");
    }

    return (
        <>
            <NavBar></NavBar>
            <div className="hotels-container">
                <div className='si'>
                    <div className="hotels-search-bar">
                <h1>Búsqueda de Hotel</h1>
                <form className="hotels-search-form" onSubmit={handleClick}>
                    {/*<input*/}
                    {/*    type="text"*/}
                    {/*    placeholder="Ciudad"*/}
                    {/*    name="ciudad"*/}
                    {/*    required*/}
                    {/*/>*/}
                    <OptionField text={'si'} state={setSalida}></OptionField>
                    <input
                        type="text"
                        placeholder="Adultos"
                        name="ciudad"
                    />
                    {/*<select name="amenidades" required>*/}
                    {/*    <option value="none">Amenidades:</option>*/}
                    {/*    <option value="am1">Amenidad</option>*/}
                    {/*    <option value="am3">Amenidad</option>*/}
                    {/*    <option value="am4">Amenidad</option>*/}
                    {/*    <option value="am5">Amenidad</option>*/}
                    {/*    <option value="am6">Amenidad</option>*/}
                    {/*</select>*/}
                    <input type="date" name="Llegada"/>
                    <input type="date" name="Salida"/>
                    <button className="hotels-search-button" type="submit">Buscar</button>
                </form>
            </div>
                </div>
        </div>
        </>
    );
}

export default HotelSearch;