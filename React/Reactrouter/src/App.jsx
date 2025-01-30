import styled from "styled-components";
import Main from "./pages/Main";

function App() {
  return (
    <AppStyled>
      <Main />
    </AppStyled>
  );
}

export default App;
const AppStyled = styled.div`
  height: 100%;
  margin: 0;
`;
