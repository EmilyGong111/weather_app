import React from 'react';
import Temperature from '../../Temperature';
import styled from 'styled-components';
import WeatherItem from './WeatherItem';

const Wrapper = styled.div`
text-align: center;
/* display: flex;
flex-direction: column;
align-items: center; */
`
const StyledTemperature = styled(Temperature)`
color: white;
font-size: 5rem;
`
const MainWeather = styled.div`
font-size: 1.5rem;
color: #ffffff80;
margin-top: 0.25rem;
`
const HumidityAndWidth = styled.div`
display: flex;
margin-top: 3rem;
`
const Divider = styled.div`
width: 2px;
background-color:#ffffff80;
margin: 0 2rem;
`


const Weather = ({temperature, mainWeather, humidity, wind}) => {
  return (
    <Wrapper>
      <StyledTemperature value={temperature}/>
      <MainWeather>{mainWeather}</MainWeather>
      <HumidityAndWidth>
          <WeatherItem title="Humidity" value={`${humidity} %`}/>
          <Divider />
          <WeatherItem title="Wind" value={`${wind} K/M`}/>
      </HumidityAndWidth>
    </Wrapper>
    
  )
}

export default Weather