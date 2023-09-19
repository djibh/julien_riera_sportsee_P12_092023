import styled from "styled-components";
import SideMenu from "../reusable/SideMenu";
import { useEffect, useState } from "react";
import Analytics from "./analytics/Analytics";

export default function DashboardPage() {

  // data à récupérer depuis la route /user/:id
  const [firstName, setFirstName] = useState("utilisateur inconnu")

  useEffect(() => {
    const username = 'Utilisateur adoré'
    setFirstName(username)
  }, [])
  

  return (
    <DashboardPageStyled>
      <div className="wrapper">
          <SideMenu />
          <Analytics username={firstName}/>
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
    grid-template-columns: 120px 1fr;
    flex: 1;
  }
`;