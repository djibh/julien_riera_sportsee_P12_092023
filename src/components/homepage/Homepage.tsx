import styled from "styled-components";
import Logo from "../reusable/Logo";
import { theme } from "../../theme";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
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
  background: ${theme.colors.analyticsBackground};
  z-index: 10;

  .logo {
    scale: 1.2;
  }

  .login-form {
    position: relative;
    text-align: center;
    display: flex;
    height: 25vh;
    flex-direction: column;
    justify-content: space-between;
    padding: 3em 2em;
    background: ${theme.colors.analyticsBackground};
    border-radius: ${theme.borderRadius.large};
    box-shadow: 0px 5px 24px rgba(200, 200, 200, 0.8);    
    
    & h1 {
      font-size: 1.4rem;
      color: ${theme.colors.barChartBlack}
    }

    .form__btns {
      display: flex;
      gap: 8px;
      justify-content: center;
  
      & :first-child {
        background-color: #FF3B3B;
      }
  
      & :nth-child(2) {
        background-color: #D1308B;
      }
    }
  }




`;