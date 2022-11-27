import "./Hotels.scss";
import NavBar from "../components/global/NavBar";

function Hotels() {
    return (
        <>
            <div className="hotels-page">
                <NavBar />
                <div className="hotels-container">
                    <div className="hotels-search-bar">
                        <h1>Búsqueda de Hotel</h1>
                        <form className="hotels-search-form">
                            <input
                                type="text"
                                placeholder="Ciudad"
                                name="ciudad"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Adultos"
                                name="ciudad"
                                required
                            />
                            <select name="amenidades" required>
                                <option value="none">Amenidades:</option>
                                <option value="am1">Amenidad</option>
                                <option value="am3">Amenidad</option>
                                <option value="am4">Amenidad</option>
                                <option value="am5">Amenidad</option>
                                <option value="am6">Amenidad</option>
                            </select>
                            <input type="date" name="fecha" required />
                            <button className="hotels-search-button" type="submit">Buscar</button>
                        </form>
                    </div>
                    <div className="hotels-search-view">
                        <div className="hotel-preview">
                            <p>Nombre del Hotel</p>
                            <p>Distancia</p>
                            <p>Aeropuerto</p>
                            <p>Precio</p>
                        </div>
                        <div className="hotel-preview">
                            <p>Nombre del Hotel</p>
                            <p>Distancia</p>
                            <p>Aeropuerto</p>
                            <p>Precio</p>
                        </div>
                        <div className="hotel-preview">
                            <p>Nombre del Hotel</p>
                            <p>Distancia</p>
                            <p>Aeropuerto</p>
                            <p>Precio</p>
                        </div>
                        <div className="hotel-preview">
                            <p>Nombre del Hotel</p>
                            <p>Distancia</p>
                            <p>Aeropuerto</p>
                            <p>Precio</p>
                        </div>
                        <div className="hotel-preview">
                            <p>Nombre del Hotel</p>
                            <p>Distancia</p>
                            <p>Aeropuerto</p>
                            <p>Precio</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hotels;
