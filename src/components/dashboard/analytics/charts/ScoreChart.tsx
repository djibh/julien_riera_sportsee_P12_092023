import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { theme } from '../../../../theme';
import styled from 'styled-components';

type ScoreChartProps = {
  score: number
}

/**
 * This component renders the daily score chart.
 * @property { number } score
 * @returns { React.Component } A React component
 */
export default function ScoreChart({ score }: ScoreChartProps): JSX.Element {
  let scoreToPercent; 
  if (score) {
    scoreToPercent = Math.round(score * 100)
  }
  
  const data = [{ value: 1 }, { value: score }]
  
  return ( <>
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
              innerRadius="55%" 
              outerRadius="75%" 
              data={data} 
              startAngle={90} 
              endAngle={ 450 }
              barSize={10}
              style={{backgroundColor: `${theme.colors.analyticsBackground}`, borderRadius: `${theme.borderRadius.medium}`}}
              >
              <RadialBar dataKey='value' cornerRadius={16} fill={`${theme.colors.accentRed}`}/>
            </RadialBarChart>
        </ResponsiveContainer>

        <span style={{position: "absolute", top: "15px", left: "15px", color: `${theme.colors.chartsTitleDark}`}}>Score</span>
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
    width: 58%;
    height: 58%;
    margin: 0;
    text-align: center;
    transform: translate(-50%, -50%);

    border-radius: 50%;
    border: 1px solid white;
    background-color: white;
    color: ${theme.colors.chartsTitleDark};
    font-weight: 500;

    & h2 {
      top: 0;
      left: 0;
    }

    & * {
      font-size: 0.85rem;
      color: ${theme.colors.activityChartLegend};
    }

    & :first-child {
      font-size: 1.7rem;
      color: ${theme.colors.chartsBlack};
    }
`;