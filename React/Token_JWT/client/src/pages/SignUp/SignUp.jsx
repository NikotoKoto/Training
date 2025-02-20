import styled from "styled-components";

export default function SignUp() {
  return (
    <SignUpStyled>
      <form className="form-Signup">
        <h2 className="titleContent">Inscription</h2>
        <div className="contentFormFirstLevel">
          <label htmlFor="name">Name</label>
          <input className="inputStyle" type="text" id="name"/>
          <label htmlFor="email">Email</label>
          <input className="inputStyle" id="email"/>
        </div>
        <div className="contentFormSecondLevel">
          <label htmlFor="password">Password</label>
          <input className="inputStyle"  type="password" id="password"/>
          <label htmlFor="confirmPassword">Confirm password</label>
          <input className="inputStyle"  type="password" id="confirmPassword"></input>
        </div>
        <button className="buttonSubmit">Submit</button>
      </form>
    </SignUpStyled>
  );
}

const SignUpStyled = styled.div`
padding: 50px;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
 

  .form-Signup{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 20px 0 0 0;
    height: auto;
    width: 350px;

    border-radius: 15px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);

  }
  .titleContent{
    margin-top: 20px;
  }
  .contentFormFirstLevel,.contentFormSecondLevel{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
  }

  .inputStyle{
    border: 0.5px solid  grey;
    border-radius: 15px;
    padding-left: 5px;
  
  }
  .buttonSubmit{
    margin: 20px;
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #1d1402;
    color: white;
  }


  `;
