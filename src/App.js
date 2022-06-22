import React, { useState } from 'react';
import styled from 'styled-components';
import LocalWeather from './components/LocalWeather';
import BackgroundImage from './components/BackgroundImage';
import OtherCityWeather from './components/OtherCityWeather';
import Forecast from './components/Forecast';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Montserrat', sans-serif;
}
`

const StyledBackgroundImage = styled(BackgroundImage)`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
min-width: 100vw;
font-family: 'Montserrat', sans-serif;
`
const Container = styled.div`
background-color: white;
overflow: hidden;
width: 900px;
border-radius: 32px;
box-shadow: 0 0 16px #00000050;
`
const Layout = styled.div`
display: flex;
padding: 50px 0;
`
const Divider = styled.div`
width: 3px;
background-color: #00000010;
`
const App = () => {
  const[CurrentCityId, setCurrentCityId] = useState(2158177)
 return <StyledBackgroundImage src="https://wallpaperaccess.com/full/2629319.png">
    <GlobalStyle />
    <Container> 
      <LocalWeather cityId={CurrentCityId}/>
      <Layout>
        <OtherCityWeather CurrentCityId={CurrentCityId} setCurrentCityId={setCurrentCityId}/>
        <Divider />
        <Forecast cityId={CurrentCityId}/>
      </Layout>
    </Container>
  </StyledBackgroundImage>
}

export default App
