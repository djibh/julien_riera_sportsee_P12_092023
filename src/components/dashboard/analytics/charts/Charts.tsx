import { useParams } from "react-router-dom";
import ActivityChart from './ActivityChart';
import AvgSessionChart from "./AvgSessionChart";
import PerformanceChart from "./PerformanceChart";
import ScoreChart from "./ScoreChart";
import useActivity from "../../../../hooks/useActivity";
import useAverageSessions from "../../../../hooks/useAverageSessions";
import usePerf from "../../../../hooks/usePerfs";
import useInfos from "../../../../hooks/useInfos";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Charts() {
  const { id } = useParams<{id: string}>()
  const { sessions } = useActivity(id)  
  const { averageSessions } = useAverageSessions(id)
  const { kind, performance } = usePerf(id)
  const { score } = useInfos(id)
  
  return (
    <ChartsStyled>
      <ActivityChart data={ sessions } />
      <div className="square-charts">
        <AvgSessionChart data={ averageSessions }/>
        <PerformanceChart data={ performance } categories={kind} />
        <ScoreChart score={ score } />
      </div>
    </ChartsStyled>
  )
}

const ChartsStyled = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 75%;
    border-radius: ${theme.borderRadius.medium};

    .square-charts {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      height: 45%;
    }

    .square-charts > * {
      aspect-ratio: 1;
    }
`;