import Headers from './components/Headers/Headers'
import Footer from "./components/Footer/Footer"
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
export default function App() {


  return (
    <AppStyled>
      <Headers/>
      <div className="AppContainer">App
        <Suspense>
          <Outlet/>
        </Suspense>
      </div>
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
