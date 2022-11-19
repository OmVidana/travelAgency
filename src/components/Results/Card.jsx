
function Card(props) {
    return (
        <div className="card">
            <h2 id="dest">{props.departure}</h2>
            <h2 id="arr">{props.arrival}</h2>
            <h4 id="destime" className="time">{props.departuret} </h4>
            <h4 id="arrtime" className="time">{props.arrivalt}</h4>
            <h2 className="price">{props.price}</h2>
            <svg width="54" height="24" viewBox="0 0 54 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrow">
                <path
                    d="M53.0607 13.0607C53.6464 12.4749 53.6464 11.5251 53.0607 10.9393L43.5147 1.3934C42.9289 0.807612 41.9792 0.807612 41.3934 1.3934C40.8076 1.97918 40.8076 2.92893 41.3934 3.51472L49.8787 12L41.3934 20.4853C40.8076 21.0711 40.8076 22.0208 41.3934 22.6066C41.9792 23.1924 42.9289 23.1924 43.5147 22.6066L53.0607 13.0607ZM3.78791e-09 13.5L52 13.5L52 10.5L-3.78791e-09 10.5L3.78791e-09 13.5Z"
                    fill="#A8A8A8"/>
            </svg>
        </div>
    );
}

export default Card;