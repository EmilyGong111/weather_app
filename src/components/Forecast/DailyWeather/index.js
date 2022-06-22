import React from 'react';
import styled from 'styled-components';
import WeatherIcon from "../../WeatherIcon";
import Temperature from "../../Temperature";
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Day = styled.h3`
font-size: 1.5rem;
`
const StyledWeatherIcon = styled(WeatherIcon)`
width: 80px;
height: 80px;
`
const DailyWeather = ({day, temperature, weather}) => {
  return (
    <Wrapper>
      <Day>{day}</Day>
      <StyledWeatherIcon code={weather.icon} description={weather.description}/>
      <Temperature value={temperature}/>
    </Wrapper>
  )
}

export default DailyWeather