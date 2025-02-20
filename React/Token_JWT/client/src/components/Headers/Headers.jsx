import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Headers() {
  return (
    <HeadersStyled>
      <div className="content-logo">
        <NavLink className="no_css_Nav"to="/">
          <strong>JWT</strong>
      </NavLink>
      </div>
      <div className="center-nav">
        <ul className="ul-header">
          <NavLink className="no_css_Nav"to="signup">Inscription</NavLink>
        </ul>
      </div>
    </HeadersStyled>
);
}

const HeadersStyled = styled.div`

  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  .content-logo {
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .center-nav {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center};

  .no_css_Nav{
    text-decoration: none;
    color: black;

  }
`;
