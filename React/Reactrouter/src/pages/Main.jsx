import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
export default function Main() {
  return (
    <>
      <MainStyled>
        <Header />
        <div className="content">
          <Outlet/>
        </div>
        <Footer />
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
