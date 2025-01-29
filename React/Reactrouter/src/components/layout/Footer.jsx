import React from 'react'
import styled from 'styled-components'

export default function footer() {
  return (
    <FooterStyled>Copyright 2022 React-router, Inc</FooterStyled>
  )
}

const FooterStyled = styled.div`
position: absolute;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 60px;
background-color: red;
    
`