import React from 'react'
import styled from 'styled-components'

export default function header() {
  return (
    <HeaderStyled>
        <div className="titleHeader">React-router</div>
    </HeaderStyled>
  )
}
const HeaderStyled = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    top:0;
    width: 100%;
    height: 50px;
 
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;;


`