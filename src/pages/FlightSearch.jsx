import NavBar from '../components/global/NavBar';
import './FlightSearch.css'
import React, { useState } from 'react';
import Field from "../components/Search/Field";


function Home() {
    const [title, setTitle] = useState('')
    const [llegada, setLLegada] = useState('None')
    const [fIda, setfIda] = useState('None')
    const [fVuelta, setfVuelta] = useState('None')
    const [aerolinea, setAerolinea] = useState('None')
    const [adultos, setAdultos] = useState('None')

    var jsonData1 = {

        "Salida": title,
        "Llegada": llegada,
        'FechaIda': fIda,
        'FechaVuelta': fVuelta,
        'Aerolinea': aerolinea,
        'Adultos': adultos

    }


    function handleClick() {

        var formData = new FormData();
        formData.append('json1', JSON.stringify(jsonData1));

        // Send data to the backend via POST
        fetch(' http://127.0.0.1:8000/prueba/', {

            method: 'POST',
            mode: 'cors',
            body: formData // body data type must match "Content-Type" header

        })
    }

    return (
        <div className='home-page'>
            <NavBar/>
            <main>
                <h2>Buscar Vuelo</h2>
                <form>
                    <div id="main__search">
                        <div id="main__search">
                            <Field text="Salida" type="text" state= {setTitle} />
                            <div className="svg-cont">
                                <svg xmlns="http://www.w3.org/2000/svg" className="arrows" width="44" height="44"
                                     viewBox="0 0 24 24" stroke-width="1.5" stroke="#A8A8A8" fill="none"
                                     stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <line x1="21" y1="17" x2="3" y2="17"/>
                                    <path d="M6 10l-3 -3l3 -3"/>
                                    <line x1="3" y1="7" x2="21" y2="7"/>
                                    <path d="M18 20l3 -3l-3 -3"/>
                                </svg>
                            </div>
                            <Field text="LLegada" type="text" state= {setLLegada} />
                        </div>
                        <button id="search" onClick={handleClick}>Buscar</button>
                    </div>
                    <div id="flight__options">
                        <h3>Solo ida</h3>
                        <h3>Ida y vuelta</h3>
                    </div>
                    <div id="extra__options">
                        <h3>Busqueda Avanzada</h3>
                        <div id="options">
                            <Field text="Fecha de salida" type="text" state= {setfIda} />
                            <Field text="Fecha de llegada" type="text" state= {setfVuelta} />
                            <Field text="Aerolinea" type="text" state= {setAerolinea} />
                            <Field text="Adultos" type="text" state= {setAdultos} />
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Home;