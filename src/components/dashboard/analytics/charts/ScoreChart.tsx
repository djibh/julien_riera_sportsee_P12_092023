import { RadialBarChart, RadialBar, Tooltip, ResponsiveContainer } from 'recharts';
import { theme } from '../../../../theme';
import styled from 'styled-components';

type ScoreChartProps = {
  score?: number,
  className?: string
}

export default function ScoreChart({ score }: ScoreChartProps) {
  let scoreToPercent; 
  if (score) {
    scoreToPercent = score * 100
  }
  
  const data = [
    {
      "name": "18-24",
      "uv": score,
      "pv": 2400,
    }
  ]
  
  return ( <>
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
              innerRadius="65%" 
              outerRadius="80%" 
              data={data} 
              startAngle={90} 
              endAngle={200}
              style={{backgroundColor: `${theme.colors.analyticsBackground}`, borderRadius: `${theme.borderRadius.medium}`}}
              >
              <RadialBar dataKey='uv'cornerRadius={16} fill={`${theme.colors.accentRed}`}/>
              <Tooltip />
            </RadialBarChart>
        </ResponsiveContainer>

        <span style={{position: "absolute", top: "10px", left: "10px", color: "#20253A"}}>Score</span>
        <ScoreContentStyled>
          <span>{ scoreToPercent }%</span>
          <span>de votre objectif</span>
        </ScoreContentStyled>
      </>
  )
}

const ScoreContentStyled = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 50%;
    left: 50%;
    width: 35%;
    height: 35%;
    margin: 0;
    text-align: center;
    padding: 18px;
    transform: translate(-50%, -50%);

    border-radius: 50%;
    background-color: white;
    color: #20253a;
    font-weight: 500;

    & h2 {
      top: 0;
      left: 0;
    }

    & * {
      font-size: 0.65rem;
      color: ${theme.colors.activityChartLegend};
    }

    & :first-child {
      font-size: 1.3rem;
      color: ${theme.colors.chartsBlack};
    }
`;