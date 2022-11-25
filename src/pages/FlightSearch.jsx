import NavBar from "../components/global/NavBar";
import "./FlightSearch.scss";
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
import Loader from "../components/global/Loader"

function Home(props) {
    const [title, setTitle] = useState("");
    const [llegada, setLLegada] = useState("None");
    const [fIda, setfIda] = useState("None");
    const [fVuelta, setfVuelta] = useState("None");
    const [aerolinea, setAerolinea] = useState("None");
    const [adultos, setAdultos] = useState("None");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    let jsonData1 = {

        "Salida": title.split(',')[0],
        "Llegada": llegada.split(',')[0],
        'FechaIda': fIda,
        'FechaVuelta': fVuelta,
        'Aerolinea': aerolinea,
        'Adultos': adultos

    }


    function handleClick(event) {
        setLoading(true)
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
            <Loader flag={loading} />
            <div id='cont'>
                <main>
                    <h2>Buscar Vuelo</h2>
                <form>
                    <OptionField text="Salida" state={setTitle} />
                    <OptionField text="Llegada" state={setLLegada} />
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
                    <button id="search" onClick={handleClick}>
                        Buscar
                    </button>
                    </form>
                </main>
            </div>
        </div>
    );
}

export default Home;