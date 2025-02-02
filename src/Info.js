import React from "react";
import Date from "./Date";
export default function Info(props) {
  return (
    <div className='Info'>
      <h1>{props.data.city}</h1>
      <ul>
        <Date />
        <li>{props.data.description}</li>
      </ul>
      <div className='row'>
        <div className='col-6'>
          <div className='d-flex'>
            <div>
              <img src='http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png' />
            </div>
            <div className='temperature'>
              {Math.round(props.data.temperature)}°C
            </div>
          </div>
        </div>
        <div className='col-6'>
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
