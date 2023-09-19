import styled from "styled-components";
import Navbar from "../components/dashboard/navbar/Navbar";
import SideMenu from "../components/dashboard/SideMenu";
import { useEffect, useState } from "react";
import Main from "../components/dashboard/main/Main";

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
            <Main username={firstName}/>
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