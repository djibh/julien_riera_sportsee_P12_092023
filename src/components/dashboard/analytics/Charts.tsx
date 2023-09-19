import styled from "styled-components";
import { mockData } from "../../../data/mockData";
import ActivityChart from './charts/ActivityChart';
import { theme } from "../../../theme";

export default function Charts() {

  const activity = mockData.USER_ACTIVITY[0].sessions

  return (
    <ChartsStyled>
      <ActivityChart data={activity} />
    </ChartsStyled>

  )
}

const ChartsStyled = styled.div`
    width: 70%;
    background: ${theme.colors.chartsBackgroundColor};
`;