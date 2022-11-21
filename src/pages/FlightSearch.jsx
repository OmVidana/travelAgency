import NavBar from "../components/global/NavBar";
import "./FlightSearch.css";
import React, { useState } from "react";
import Field from "../components/Search/Field";
// import OptionField from "../components/Search/OptionField";
// import {Autocomplete} from "@mui/material";
import OptionField from "../components/Search/OptionField";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { redirect } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home(props) {
    const [title, setTitle] = useState("");
    const [llegada, setLLegada] = useState("None");
    const [fIda, setfIda] = useState("None");
    const [fVuelta, setfVuelta] = useState("None");
    const [aerolinea, setAerolinea] = useState("None");
    const [adultos, setAdultos] = useState("None");
    const navigate = useNavigate();


    let jsonData1 = {

        "Salida": title.split(',')[0],
        "Llegada": llegada.split(',')[0],
        'FechaIda': fIda,
        'FechaVuelta': fVuelta,
        'Aerolinea': aerolinea,
        'Adultos': adultos

    }


    function handleClick(event) {
        let formData = new FormData();
        event.preventDefault();
        formData.append("json1", JSON.stringify(jsonData1));

        // Send data to the backend via POST
        fetch(" http://127.0.0.1:8000/flightoptions/", {
            method: "POST",
            mode: "cors",
            body: formData, // body data type must match "Content-Type" header
        })
            .then((response) => response.json())
            .then((data) => navigate("/results", { state: data }));
        // .then(data => console.log(data['data']));
        //     .then(data => setTitle(data['json1']));
        // return redirect("/home");
    }

    return (
        <div className="home-page">
            <NavBar />
            <main>
                <h2>Buscar Vuelo</h2>
                <form>
                    <div id="main__search">
                        <div id="main__search">
                            {/*<Field text="Salida" type="text" state= {setTitle} />*/}
                            <OptionField text="Salida" state={setTitle} />
                            <div className="svg-cont">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="arrows"
                                    width="44"
                                    height="44"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="#A8A8A8"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <line x1="21" y1="17" x2="3" y2="17" />
                                    <path d="M6 10l-3 -3l3 -3" />
                                    <line x1="3" y1="7" x2="21" y2="7" />
                                    <path d="M18 20l3 -3l-3 -3" />
                                </svg>
                            </div>
                            <OptionField text="Llegada" state={setLLegada} />
                        </div>
                        <button id="search" onClick={handleClick}>
                            Buscar
                        </button>
                    </div>
                    <div id="flight__options">
                        <h3>Solo ida</h3>
                        <h3>Ida y vuelta</h3>
                    </div>
                    <div id="extra__options">
                        <h3>Busqueda Avanzada</h3>
                        <div id="options">
                            <Field
                                text="Fecha de salida"
                                type="date"
                                state={setfIda}
                            />
                            <Field
                                text="Adultos"
                                type="text"
                                state={setAdultos}
                            />
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Home;