import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components";
export default function Main() {
  return (
    <>
      <MainStyled>
        <Header />
        <div className="title">App</div>
        <Footer />
      </MainStyled>
    </>
  );
}

const MainStyled = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;

`
