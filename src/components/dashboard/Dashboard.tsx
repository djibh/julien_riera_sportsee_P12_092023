import styled from "styled-components";
import Analytics from "./analytics/Analytics";
import useMainInfo from "../../hooks/useApi";
import DashboardContext from "../../context/DashboardContext";
import { useParams } from "react-router-dom";

export default function DashboardPage() {
  const { id } = useParams()
  const { firstName, score, keyData, isLoading } = useMainInfo(id)  
  const dashboardContextValue = { firstName, score, keyData }
  
  return (
    <DashboardContext.Provider value={dashboardContextValue}>
      <DashboardPageStyled>
        {isLoading && <div>Loading...</div>}
        {!isLoading && <Analytics username={ firstName }/>}
      </DashboardPageStyled>
    </DashboardContext.Provider>
  )
}

const DashboardPageStyled = styled.div`
`;