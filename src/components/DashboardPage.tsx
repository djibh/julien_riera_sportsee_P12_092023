import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import SideMenu from "./SideMenu";

export default function DashboardPage() {
  return (
    <DashboardPageStyled>
        <Navbar />
        <div className="wrapper">
            <SideMenu />
            <main>
              <h1>Bonjour, Thomas</h1>
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
  }

  main {
    display: grid;
    place-content: center;
  }
`;