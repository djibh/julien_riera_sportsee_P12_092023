import styled from "styled-components";
import Analytics from "./analytics/Analytics";
import useInfos from "../../hooks/useInfos";
import { useParams } from "react-router-dom";

/**
 * Renders Dashboard view when infos are loaded.
 * It will also acts as a loading screen while the client is awaiting for API's response.
 * @returns { React.Component } A React component
 */
export default function DashboardPage(): JSX.Element {
  const { id } = useParams<{id: string}>()
  const { firstName, isLoading } = useInfos(id)  

  return (
      <DashboardPageStyled>
        {isLoading && <div>Loading...</div>}
        {!isLoading && <Analytics username={ firstName }/>}
      </DashboardPageStyled>
  )
}

const DashboardPageStyled = styled.div`
`;