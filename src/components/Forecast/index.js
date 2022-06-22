import React, {useEffect, useState } from 'react';
import { getDay } from 'date-fns';
import get3HourForecast from "../../api/get3HourForecast";
import Section from '../Section';
import DailyWeather from './DailyWeather';
import styled from 'styled-components';

const Layout = styled.div`
display: flex;
gap: 1rem;
`
const DAYS = ['SUN', 'MON', 'TEU', 'WEN', 'THU', 'FRI', 'SAT']
const Forecast = ({cityId}) => {
  const [dailyWeather, setDailyWeather] = useState()
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    get3HourForecast(cityId).then((res) => {
      setDailyWeather(res.data)
      setLoading(false)
    })
  },[cityId])
  if(loading) return <p> Loading</p>

  const forecast = dailyWeather.list.filter(({ dt_txt }) => dt_txt.endsWith('00:00:00'))
  return (
    <Section title="Forecast">
      <Layout>
        {forecast.map(({dt, main: {temp}, weather: [weather]}) => (
          <DailyWeather key={dt} day={DAYS[getDay(new Date(dt*1000))]} temperature={temp} weather={weather}/>
        ))}
      </Layout> 
    </Section>
  )
}

export default Forecast