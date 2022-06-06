import React from 'react';
import styled from 'styled-components';
import Forecast from './Forecast';
import SocialMedia from './SocialMedia';

const BodyStyle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
`
const Body = () => {
  return (
    <BodyStyle>
        <SocialMedia />
        <Forecast />
    </BodyStyle>
  )
}

export default Body