import React from 'react';
import location from '../location.svg';
import './City.css';

function City() {
  return (
      <div className="location-container">
        <img src={location} className="location-icon" alt="City"/>
        <span className="city">Francisco Álvarez, Buenos Aires, Argentina, Earth.</span>
      </div>
  );
}

export default City;
