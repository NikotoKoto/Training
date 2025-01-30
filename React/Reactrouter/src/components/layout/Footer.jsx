import React from 'react'
import styled from 'styled-components'

export default function footer() {
  return (
    <FooterStyled>Copyright 2022 React-router, Inc</FooterStyled>
  )
}

const FooterStyled = styled.div`
background: #333;
    color: white;
    padding: 10px;
    text-align: center
    
`