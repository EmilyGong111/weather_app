import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
padding: 0 48px;
color: 	#606060;
`
const Title = styled.div`
margin-bottom: 1rem;
font-size: 2rem;
font-weight: 500;
`
const Section = ({title, children}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>{children}</div>
    </Wrapper>
  )
}

export default Section