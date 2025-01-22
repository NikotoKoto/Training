import styled from "styled-components"



function App() {


  return (
    <AppStyled>
   <h1> hello world</h1>
   </AppStyled>
  )
}

export default App

const AppStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`