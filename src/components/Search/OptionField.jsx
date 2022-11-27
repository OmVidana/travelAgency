// import './FlightSearch.scss'
import React, { useState } from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


function OptionField(props) {
    

    const [title, setTitle] = useState(['SI'])

    function handleChange(event, value) {
            // console.log(event.target.value)
            var formData = new FormData();
            formData.append('code', JSON.stringify(event.target.value));
            console.log(event.target.value)
            // Send data to the backend via POST
            // fetch(' http://127.0.0.1:8000/airportcode/', {
            //
            //     method: 'POST',
            //     mode: 'cors',
            //     body: formData // body data type must match "Content-Type" header
            //
            // })
            //     .then(response => response.json())
            //     // .then(data => console.log(data['data']));
            //     .then(data => setTitle(data['json1']));
    }

    function handle(event, value) {
        console.log(value)
        props.state(value)
    }

    return (
        // <h1>FS</h1>
        <Autocomplete
            disablePortal
            // className="inp"
            options={title}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label= {props.text} />}
            onInputChange={handleChange}
            onChange={handle}
            // onChange={event => props.state(event.target.value)}
            // onChange={event => props.state(event.target.value)]
        />
    );
}

export default OptionField;