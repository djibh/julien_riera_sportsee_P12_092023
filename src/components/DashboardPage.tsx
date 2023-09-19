import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import SideMenu from "./SideMenu";
import { useEffect, useState } from "react";
import { theme } from '../theme/index';

export default function DashboardPage() {

  // data à récupérer depuis la route /user/:id
  const [firstName, setFirstName] = useState("utilisateur inconnu")

  useEffect(() => {
    const username = 'Utilisateur adoré'
  
    setFirstName(username)
  }, [])
  

  return (
    <DashboardPageStyled>
        <Navbar />
        <div className="wrapper">
            <SideMenu />
            <main>
              <h1>Bonjour, <span className="username">{firstName}</span></h1>
              <h2>Félicitations ! Vous avez explosé vos objectifs d'hier !</h2>
            </main>
        </div>
    </DashboardPageStyled>
  )
}

const DashboardPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .wrapper {
    display: grid;
    grid-template-columns: 10% 1fr;
    flex: 1;

    .username {
      color: ${theme.colors.accentRed};
    }
  }

  main {
    display: grid;
    place-content: center;
  }
`;