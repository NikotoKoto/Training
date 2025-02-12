import Headers from './components/Headers/Headers'
import Footer from "./components/Footer/Footer"
import styled from 'styled-components'
export default function App() {


  return (
    <AppStyled>
      <Headers/>
      <div className="AppContainer">App</div>
      <Footer/>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;


  .AppContainer{
    flex: 1 1 auto;
    padding: 20px;
  }

`
