// import './FlightSearch.css'
import React, { useState } from 'react';


function Home(props) {
    return (
        <div className="inp">
            <label htmlFor=""> {props.text} </label>
            <input type= {props.type} name="" id="" onChange={event => props.state(event.target.value)}></input>
        </div>
    );
}

export default Home;