import "./FlightCard.scss";

function FlightCard(props) {
    return (
        <div className="flight-container">
            <div className='flight-origin'>
                <p>GDL</p>
                <p>14:30</p>
                <img src='' alt='Airlane Logo'/>
            </div>
            <div className='flight-arrow'>
                <span><i class="fa-solid fa-arrow-right-long"></i></span>
            </div>
            <div className='flight-destination'>
                <p>CDMX</p>
                <p>10:30</p>
                <img src='' alt='Airlane Logo'/>
            </div>
            <div className='flight-price'>
                <p>$150</p>
                <button className="buy-button flight-button" type="button">Comprar</button>
                <button className="cancel-button flight-button" type="button" hidden>Cancelar</button>
                <button className="modify-button flight-button" type="button" hidden>Modificar</button>
            </div>
        </div>
    );
}

export default FlightCard;