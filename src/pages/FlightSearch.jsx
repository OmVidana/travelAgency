import NavBar from '../components/global/NavBar';
import './FlightSearch.css'

function Home() {
    var jsonData1 = {

        "name": "alan",
        "age": 23,
        "username": "aturing"

    }

    var jsonData2 = {

        "name": "john",
        "age": 29,
        "username": "__john__"

    }

    function handleClick() {

        var formData = new FormData();
        formData.append('json1', JSON.stringify(jsonData1));
        formData.append('json2', JSON.stringify(jsonData2));

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
                            <div className="inp">
                                <label htmlFor="">Salida</label>
                                <input type="text" name="" id=""></input>
                            </div>
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
                            <div className="inp">
                                <label htmlFor="">Llegada</label>
                                <input type="text" name="" id=""></input>
                            </div>
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
                            <div className="inp">
                                <label htmlFor="">Fecha de ida</label>
                                <input type="text" name="" id=""></input>
                            </div>
                            <div className="inp">
                                <label htmlFor="">Fecha de vuelta</label>
                                <input type="text" name="" id=""></input>
                            </div>
                            <div className="inp">
                                <label htmlFor="">Aerolinea</label>
                                <input type="text" name="" id=""></input>
                            </div>
                            <div className="inp">
                                <label htmlFor="">Adultos</label>
                                <input type="text" name="" id=""></input>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Home;