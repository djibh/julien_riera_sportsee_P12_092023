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

/**
 * This component renders the charts of the page
 * @returns { React.Component } A React component
 */
export default function Charts(): JSX.Element {
  const { id } = useParams<{id: string}>()
  const { sessions } = useActivity(id)  
  const { averageSessions } = useAverageSessions(id)
  const { performance } = usePerf(id)
  const { score } = useInfos(id)
  
  return (
    <ChartsStyled>
      <ActivityChart data={ sessions } />
      <div className="flex">
        <div className="chart-container">
          <AvgSessionChart data={ averageSessions }/>
        </div>
        <div className="chart-container">
          <PerformanceChart data={ performance } />
        </div>
        <div className="chart-container">
          <ScoreChart score={ score } />
        </div>
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

    .flex {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      height: 45%;
    }

    .chart-container {
      position: relative;
      width: 100%;
      aspect-ratio: 1;
    }
`;