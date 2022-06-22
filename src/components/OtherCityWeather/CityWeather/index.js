import React from 'react';
import styled from 'styled-components';
import Temperature from '../../Temperature';
import WeatherIcon from '../../WeatherIcon';

const Button = styled.button`
border: 0;
padding: 0;
margin: 0;
color: #606060;
text-align: start;
background: transparent;
display: flex;
align-items: center;
gap: 0.1rem;
cursor: pointer;
`
const CityName = styled.div`
width: 100px;
`
const StyledTempreture = styled(Temperature)`
width: 80px;
`
const StyledWeatherIcon = styled(WeatherIcon)`
width: 50px;
height: 50px;
`

const CityWeather = ({name, temperature, icon, onClick}) => {
  // const changCurrentCity = () => {
  //   setCurrentCityId(id)
  // }
  return (
    <Button onClick={onClick}>
      <CityName>{name}</CityName>
      <StyledTempreture value={temperature}/>
      <StyledWeatherIcon code={icon.icon} description={icon.description}/>
    </Button>
  )
}

export default CityWeather