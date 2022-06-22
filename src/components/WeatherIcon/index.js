import React from 'react';

const WeatherIcon = ({code, description, className}) => {
  return (
    <img className={className} alt={description} src={`https://openweathermap.org/img/wn/${code}@2x.png`} />
  )
}
export default WeatherIcon