import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
width: 100%;
height: 200px;
background-color: black;
border-radius: 20px 20px 0 0;
padding: 20px;
color: white;
`

const Header = () => {
  return (
    <HeaderStyle>Header</HeaderStyle>
  )
}

export default Header