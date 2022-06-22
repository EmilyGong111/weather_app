import React, { useEffect, useState } from 'react';
import BackgroundImage from '../BackgroundImage';
import styled from 'styled-components';
import Weather from './Weather';
import CityName from './CityName';
import { getWeather } from '../../api/getWeather';

const Layout = styled.div`
display: flex;
justify-content: space-between;
padding: 64px 96px;
`
//npm i axios


const LocalWeather = ({cityId}) => {
  const[localWeather, setLocalWeather] = useState()
  // set loading whenever call a api / get data
  const[isLoading, setLoading] =useState(true)
  useEffect(() => {
    getWeather(cityId).then(({data})=> {
      setLocalWeather(data)
      setLoading(false)
    })
  }, [cityId])
  if(isLoading){
    return (<div>Loading...</div>)
  }
  return (
    <BackgroundImage src="https://i.imgur.com/GhQZhaO.jpg">
      <Layout>
        <Weather
         temperature={localWeather.main.temp}
         mainWeather={localWeather.weather[0].main}
         humidity={localWeather.main.humidity}
         wind={localWeather.wind.speed}/>
        <CityName name={localWeather.name}/>
      </Layout>
    </BackgroundImage>
  )
}

export default LocalWeather