import React from "react";
import "./Temperature.css";


export default function Temperature() {
  return (
      <div className="temp-details">
    <div class="row mb-5">
      <div class="col-6">
        <h1>Glendora</h1>
        <ul>
          <li id="current-time">3:30pm</li>
          <li id="current-date">May 27, 2021</li>
          <li id="humidity">Humidity: 33%</li>
          <li id="wind-speed">Wind Speed: 24 mph</li>
        </ul>
      </div>
      <div class="col-4">
        <h1 class="main">
          <span id="current-temp">85°F</span>
        </h1>
        <br />
        <h2 id="weather-description">Clear Sky</h2>
      </div>
      <div class="col-2">
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt="Clear"
          id="icon"
        />
        <br />
      </div>
    </div>
    </div>
  );
}