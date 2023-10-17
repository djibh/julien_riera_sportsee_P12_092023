import styled from "styled-components";
import Logo from "../reusable/Logo";
import { theme } from "../../theme";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";


/**
 * This component renders the user selection buttons, it will be replaced by future actual login/signup elements.
 * If the backend is running, the hooks will use the selected ID as a parameter to request data from it using Axios.
 * Otherwise, the data will be loaded using those same ID via src/data/mockData.ts
 * @returns { React.Component } A React component
 */
export default function Homepage(): JSX.Element {
  const [userId, setUserId ] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault
    navigate(`user/${userId}`)
  }

  return (
    <HomePageStyled>
      <form action="submit" onSubmit={handleSubmit} className="login-form">
        <Logo classname="logo"/>
        <div >
          <h1>Choisis ton utilisateur</h1>
          <div className="form__btns">
            <button onClick={() => setUserId("12")}>Utilisateur 12</button>
            <button onClick={() => setUserId("18")}>Utilisateur 18</button>
          </div>
        </div>
      </form>
    </HomePageStyled>
  )
}

const HomePageStyled = styled.div`
  position: fixed;
  inset: 0;
  display: grid;
  place-content: center;
  justify-content: center;
  background: ${theme.colors.barChartGridGrey};
  z-index: 10;

  .logo {
    scale: 1.15;
  }

  .login-form {
    position: relative;
    text-align: center;
    display: flex;
    height: 25vh;
    width: 30vw;
    min-width: 300px;
    max-width: 450px;
    flex-direction: column;
    justify-content: space-between;
    padding: 3em 1em;
    background: ${theme.colors.analyticsBackground};
    border-radius: ${theme.borderRadius.large};
    box-shadow: 0px 5px 12px rgba(180, 180, 180, 0.8);    
    
    & h1 {
      font-size: 1.3rem;
      font-weight: 400;
      color: ${theme.colors.chartsBlack}
    }

    .form__btns {
      display: flex;
      justify-content: space-evenly;
  
      & :first-child {
        background-color: #FF3B3B;
      }
  
      & :nth-child(2) {
        background-color: #D1308B;
      }
    }
  }




`;