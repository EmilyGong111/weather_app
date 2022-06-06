import { getWeathers } from './api/Weathers';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Body from './components/Body';

const Wrapper = styled.div`
/* background-color: pink; */
background: #ffffff10;
width: 80vw;
max-width: 800px;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

function App() {
  const [data, setData] = useState('')
  useEffect(() => {
    getWeathers().then((res) => {
      console.log(res.data)
      const result = JSON.stringify(res.data)
      setData(result)
    })
  },[])
  return ( 
      <Wrapper>
        <Header />
        <Body />
        <p>{data}</p>
      </Wrapper>  
  )
}
export default App;
