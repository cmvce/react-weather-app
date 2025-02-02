import React from "react";

export default function Info(props) {
  return (
    <div className='Info'>
      <h1>{props.city}</h1>
      <ul>
        <li>sunday 09h00</li>
        <li>sunny</li>
      </ul>
      <div className='row'>
        <div className='col-6'>
          <div className='d-flex'>
            <div>
              <img src='http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png' />
            </div>
            <div className='temperature'>{props.temperature}°C</div>
          </div>
        </div>
        <div className='col-6'>
          <ul>
            <li>Humidity:{props.humidity}</li>
            <li>Wind:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
