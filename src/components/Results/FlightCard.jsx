import "./FlightCard.scss";

function FlightCard(props) {
    return (
        <div className="flight-container">
            <div className='flight-origin'>
                <p id="dest">{props.departure}</p>
                <p id="arr">{props.arrival}</p>
                <img src='' alt='Airlane Logo'/>
            </div>
            <div className='flight-arrow'>
                <span><i className="fa-solid fa-arrow-right-long"></i></span>
            </div>
            <div className='flight-destination'>
                <p id="destime">{props.departuret}</p>
                <p id="destime">{props.arrivalt}</p>
                <img src='' alt='Airlane Logo'/>
            </div>
            <div className='flight-price'>
                <p>{props.price}</p>
                <button className="buy-button flight-button" type="button">Comprar</button>
                <button className="cancel-button flight-button" type="button">Cancelar</button>
                <button className="modify-button flight-button" type="button">Modificar</button>
            </div>
        </div>
    );
}

export default FlightCard;