import React, { useState } from "react";
import axios from 'axios';
import './App.css';
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  const [city, setCity] = useState(null);
  const [message, setMessage] = useState(null);

  function showWeather(response) {
    let temp = Math.round(response.data.main.temp);
    let description = response.data.weather[0].description;
    let humidity = response.data.main.humidity;
    let wind = Math.round(response.data.wind.speed);
    let icon = response.data.weather[0].icon;
    let image = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    setMessage(
      <ul>
        <li>
          {" "}
          <strong class="cityName">{city}</strong>
        </li>
        <li>Temperature: {temp}ºC</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity}%</li>
        <li>Wind: {wind} km/h</li>
        <li>
          <img alt="weather icon" src={image} />
        </li>
      </ul>
    );
  }

  function handleSubmit(response) {
    response.preventDefault();
    let apiKey = `5e5c2757f7c28e9aed7d744b591dfdeb`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showCity(response) {
    setCity(response.target.value);
  }

  let searchBox = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city..." onChange={showCity} />
      <input type="submit" value="Search" class="btn"/>
       <input type="submit" value="Cerrent" class="btncerrent"/>
    </form>
  );

  if (city) {
    return (
      <div className="Search">
        {searchBox}
        {message}
      </div>
    );
  } else {
    return <div className="Search">{searchBox}</div>;
  }

  
}


  
