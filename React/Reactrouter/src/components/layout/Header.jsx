import React from 'react'
import styled from 'styled-components'

export default function header() {
  return (
    <HeaderStyled>
        <strong className="titleHeader">React-router</strong>
        <ul></ul>
    </HeaderStyled>
  )
}
const HeaderStyled = styled.div`
  background: #ffffff;
    color: red;
    padding: 20px;
   justify-content: center;
 
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;;


`