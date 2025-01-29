import React from 'react'
import styled from 'styled-components'


export default function ComponentsB() {
  return (
    <ComponentsBStyled >Bonjour c'est toi</ComponentsBStyled>
  )
}
const ComponentsBStyled = styled.button`
    padding: 20px;
    border-radius: 25px;
    color: orange;
    background-color: white;
    border: 1px solid orange;
    cursor: pointer;
`