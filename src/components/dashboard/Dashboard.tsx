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
      {/* <SideMenu /> */}
      <Analytics username={firstName}/>
    </DashboardPageStyled>
  )
}

const DashboardPageStyled = styled.div`
`;