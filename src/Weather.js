import React, { use, useState } from "react";
import axios from "axios";
import "./Weather.css";
import Info from "./Info";
export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function getResponse(response) {
    setWeather({
      ready: true,
      temperature: {
        current: response.data.temperature.current,
        humidity: response.data.temperature.humidity,
      },
      city: response.data.city,
    });
  }

  function submit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const key = "80oc158tb64caae306c6eb4bf7cef14f";
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    axios.get(url).then(getResponse);
  }
  if (weather.ready) {
    return (
      <div className='Weather'>
        <form onSubmit={submit}>
          <div className='row'>
            <div className='col-9'>
              <input
                type='search'
                placeholder='Search'
                className='form-control'
                autoFocus='on'
                onChange={updateCity}
              />
            </div>
            <div className='col-3'>
              <input type='button' value='Search' className='btn w-100' />
            </div>
          </div>
        </form>
        <Info />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
