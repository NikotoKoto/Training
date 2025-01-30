import Header from "../layout/Header";
import Footer from "../layout/Footer";
import styled from "styled-components";
export default function Main() {
  return (
    <>
      <MainStyled>
        <Header />
        <div className="content">App</div>
        <Footer />
      </MainStyled>
    </>
  );
}

const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content{
    flex: 1;
    background: #f1f1f1;
    padding: 20px;
  }
`;
