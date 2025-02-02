import React from "react";
import "./Weather.css";
export default function Weather(props) {
  return (
    <div className='Weather'>
      <form>
        <div className='row'>
          <div className='col-9'>
            <input
              type='search'
              placeholder='Search'
              className='form-control'
              autoFocus='on'
            />
          </div>
          <div className='col-3'>
            <input type='button' value='Search' className='btn w-100' />
          </div>
        </div>
      </form>

      <h1>Rome</h1>
      <ul>
        <li>sunday 09h00</li>
        <li>sunny</li>
        <img src='http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png' />
        <li>6°C</li>
      </ul>
    </div>
  );
}
