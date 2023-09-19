import styled from "styled-components";
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE  } from "../../../../data/mockData";
import ActivityChart from './ActivityChart';
import { theme } from "../../../../theme";
import AvgSessionChart from "./AvgSessionChart";
import PerformanceChart from "./PerformanceChart";
import ScoreChart from "./ScoreChart";

export default function Charts() {

  const activity = USER_ACTIVITY[0].sessions
  const avgSession = USER_AVERAGE_SESSIONS[0].sessions
  const { data, kind } = USER_PERFORMANCE[0]
  const { todayScore, score } = USER_MAIN_DATA[0]
  
  return (
    <ChartsStyled>
      <ActivityChart data={ activity } />
      <div className="square-charts">
        <AvgSessionChart data={ avgSession }/>
        <PerformanceChart data={ data } categories={kind} />
        <ScoreChart score={ todayScore || score } />
      </div>
    </ChartsStyled>
  )
}

const ChartsStyled = styled.div`
    box-sizing: border-box;
    width: 70%;
    padding: 2em 3em;
    background: ${theme.colors.chartsBackgroundColor};
    border-radius: ${theme.borderRadius.medium};

    .square-charts {
      display: flex;
      justify-content: space-between;
    }
`;