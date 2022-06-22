import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
color: #ffffff70;
`
const Title = styled.div`
margin-bottom: 1rem;
font-weight: 500;
font-size: 1.5rem;
`

const WeatherItem = ({title, value}) => {
  return (
    <Wrapper >
      <Title>{title}</Title>
      <div>{value}</div>
    </Wrapper>
  )
}

export default WeatherItem