import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';
import { theme } from '../../../../theme';
import styled from 'styled-components';

type AvgSessionChartProps = {
  data: object[]
}

export default function AvgSessionChart({ data }: AvgSessionChartProps) {
  return (<>
        <AvgSessionsTitleStyled>
          Durée moyenne des sessions
        </AvgSessionsTitleStyled>
        <ResponsiveContainer width="100%" height="100%" >
            <LineChart 
                margin={{ top: 70, right: 30, left: 20, bottom: 40 }}
                style={{backgroundColor: `${theme.colors.accentRed}`, borderRadius: `${theme.borderRadius.medium}`}} 
                data={data}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: "white", opacity: .6, fontSize: "0.9rem"}} tickMargin={20} />
              <YAxis hide domain={['dataMin-10', 'dataMax+10']} />
              <Tooltip />
              <defs>
                <linearGradient id="line-gradient" x1="309.906" y1="-1.97779" x2="-47.7754" y2="-1.97779" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white"/>
                  <stop offset="0.810441" stopColor="white" stopOpacity="0.403191"/>
                </linearGradient>
              </defs>
              <Line type="natural" dot={false} activeDot={{stroke: '#FFF', strokeWidth: 4, r: 2	}} dataKey="sessionLength" stroke="url(#line-gradient)" strokeWidth={2}/>
            </LineChart>
        </ResponsiveContainer>
      </>
  )
}

const AvgSessionsTitleStyled = styled.span`
  position: absolute;
  margin: 0;
  padding: 18px;
  color: #FFF;
  opacity: 0.504;
  font-size: .95rem;
  font-weight: 500;
  z-index: 5;
  `;