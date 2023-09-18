import styled from "styled-components";
import Navbar from "./Navbar/Navbar"

export default function DashboardPage() {
  return (
    <DashboardPageStyled>
        <Navbar />
        <div className="wrapper">
            <aside>Aside</aside>
            <main>Main</main>
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

    :first-child {
        background: red;
    }
  }
`;