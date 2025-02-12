
import styled from 'styled-components'

export default function Headers() {
  return (
    <HeadersStyled>JWT</HeadersStyled>
  )
}

const HeadersStyled =styled.div `
    width: 100%;
    height: 40px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: #4a69bd;

`