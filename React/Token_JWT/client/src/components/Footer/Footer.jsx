import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterStyled>Copyright 2022 JWT Dyma, INC</FooterStyled>
  )
}

const FooterStyled = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2f3542;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
    color: white;
`