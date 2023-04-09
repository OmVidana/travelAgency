// import './FlightSearch.scss'
import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

function OptionField(props) {
  const [title, setTitle] = useState([]);

  function handleChange(event, value) {
    // console.log(event.target.value)
    var formData = new FormData();
    formData.append("code", JSON.stringify(event.target.value));
    console.log(event.target.value);
    // Send data to the backend via POST
    fetch(" http://127.0.0.1:8000/airportcode/", {
      method: "POST",
      mode: "cors",
      body: formData, // body data type must match "Content-Type" header
    })
      .then((response) => response.json())
      // .then(data => console.log(data['data']));
      .then((data) => setTitle(data["json1"]));
  }

  function handle(event, value) {
    console.log(value);
    props.state(value);
  }

  return (
    <Autocomplete
      disablePortal
      options={title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.text} />}
      onInputChange={handleChange}
      onChange={handle}
      disableClearable={true}
    />
  );
}

export default OptionField;
