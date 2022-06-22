import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
color: white;
font-size: 2rem;
margin-top: 1rem;
&::after {
  content:"";
  display: block;
  width: 50%;
  height: 0.1rem;
  background: #fff;
  transform: translateX(50%);
  margin-top: 0.4rem;
  border-radius: 0.1rem;
}
`
const CityName = ({name}) => {
  return (
    <Container>{name}</Container>
  )
}

export default CityName