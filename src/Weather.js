import React from "react";
import axios from 'axios';

import { Audio } from 'react-loader-spinner'


export default function Weather(props) {

function handleResponse (response){
alert (`The Weather ${response.data.name} ist ${response.data.main.temp}`)
}

let apiKey = `5e5c2757f7c28e9aed7d744b591dfdeb`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  
axios.get(apiUrl).then(handleResponse);
return (
 <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
  );
}