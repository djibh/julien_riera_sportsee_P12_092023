import styled from "styled-components";
import Analytics from "./analytics/Analytics";
import useMainInfo from "../../hooks/useApi";
import DashboardContext from "../../context/DashboardContext";

export default function DashboardPage() {
  const { firstName, score, keyData, isLoading } = useMainInfo()

  const dashboardContextValue = {
    firstName, score, keyData
  }
  
  return (
    <DashboardContext.Provider value={dashboardContextValue}>
      <DashboardPageStyled>
        {/* <SideMenu /> */}
        {isLoading && <div>Loading...</div>}
        {!isLoading && <Analytics username={ firstName }/>}
      </DashboardPageStyled>
    </DashboardContext.Provider>
  )
}

const DashboardPageStyled = styled.div`
`;