import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import styled from "styled-components";

import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
// import { useEffect } from "react";
export default function Main() {
  // const location = useLocation();

  // useEffect(() => {
  //   console.log(location)
  // }, [location])
  
  return (
    <>
      <MainStyled>
        <Header />
        <div className="content">
          <Outlet/>
        </div>
        <Footer />
        <ScrollRestoration/> {/*Used to return on top on the page when we charge an other page*/}
      </MainStyled>
    </>
  );
}

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content {
    flex: 1;
    background: #f1f1f1;
    padding: 20px;
  }
`;
