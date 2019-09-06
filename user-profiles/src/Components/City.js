import React from 'react';
import location from '../resources/images/location.svg';
import './City.css';

class City extends React.Component{

  render(){
    return (
      <div className="location-container">
        <img src={location} className="location-icon" alt="City"/>
        <span className="city">{this.props.location}</span>
      </div>
      )
  }
}

export default City;
