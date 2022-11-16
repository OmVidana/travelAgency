// import './FlightSearch.css'
import React, { useState } from 'react';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";


function OptionField(props) {

    const [title, setTitle] = useState(['Si', 'No'])

    // function handleChange(event) {
    //     console.log(event.target.value)
    //     // var formData = new FormData();
    //     // formData.append('code', JSON.stringify(event.target.value));
    //     //
    //     // // Send data to the backend via POST
    //     // fetch(' http://127.0.0.1:8000/airportcode/', {
    //     //
    //     //     method: 'POST',
    //     //     mode: 'cors',
    //     //     body: formData // body data type must match "Content-Type" header
    //     //
    //     // })
    //     //     .then(response => response.json())
    //     //     .then(data => console.log(data));
    // }

    function handleChange(event, value) {
        console.log(value);
            console.log(event.target.value)
            var formData = new FormData();
            formData.append('code', JSON.stringify(event.target.value));

            // Send data to the backend via POST
            fetch(' http://127.0.0.1:8000/airportcode/', {

                method: 'POST',
                mode: 'cors',
                body: formData // body data type must match "Content-Type" header

            })
                .then(response => response.json())
                // .then(data => console.log(data['data']));
                .then(data => setTitle(data['data']));
    }

    return (
        // <h1>FS</h1>
        <Autocomplete
            disablePortal
            // className="inp"
            options={title}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Salida" />}
            onInputChange={handleChange}
            // onChange={event => props.state(event.target.value)]
        />
    );
}

export default OptionField;