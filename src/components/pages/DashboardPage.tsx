import styled from "styled-components";

export default function DashboardPage() {
  return (
    <DashboardPageStyled>
        <nav>Navbar</nav>
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
  border: 3px solid orange;

  .wrapper {
    display: grid;
    grid-template-columns: 10% 1fr;
    border: 3px solid blue;
    flex: 1;

    :first-child {
        background: red;
    }
  }
`;