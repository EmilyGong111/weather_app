import React, { useEffect } from "react";
import Section from "../Section";
import CityWeather from "./CityWeather";
import { useState } from "react";
import { getWeathers } from "../../api/getWeathers";
import styled from 'styled-components';
const Layout = styled.div`
padding-top: 1rem;
/* line-height: 2rem; */
display: flex;
flex-direction: column;
gap: 0.5rem;
`

const OtherCityWeather = ({CurrentCityId, setCurrentCityId}) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState( true )
  useEffect(() => {
    getWeathers([2158177, 2147714, 2174003, 2063523].filter((id) => id !== CurrentCityId)).then(({data})=>{
      setData(data)
      setLoading( false )
    })
  },[CurrentCityId])
  if(loading) return <p> Loading </p>

  return (
    <Section title="Other Cities">
      <Layout>
        {data.list.map(({id, name, main: {temp}, weather: [weather] }) => (
        <CityWeather
          key={id}
          onClick={() => setCurrentCityId(id)}
          name={name}
          temperature={temp}
          icon={weather}
          // setCurrentCityId={setCurrentCityId}
        />
        ))}
      </Layout>
    </Section>
  )
}

export default OtherCityWeather