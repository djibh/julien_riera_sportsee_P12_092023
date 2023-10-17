import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, YAxis, Rectangle } from 'recharts';
import { theme } from '../../../../theme';
import styled from 'styled-components';

type AvgSessionChartProps = {
  data: object[]
}

type CustomCursorProps = {
  width: number,
  height: number,
  points: object[]
}

/**
 * This component renders a rectangle element used as a cursor type for the average sessions chart.
 * It darkens the area from the hovered dot to the end of the chart.
 * @property { number } width
 * @property { number } height
 * @property { object[] } points
 * @property { number } x
 * @returns { React.Component } A React component
 */
function CustomCursor({ width, height, points: [{ x }] }: CustomCursorProps): JSX.Element {
  return (
    <Rectangle
      fill="black"
      fillOpacity={0.0975}
      // Rect x axis start on selected dot x value
      x={x}
      // Rect y axis start
      y={0}
      // Rectangle width - selectedDotX + xAxisPadding
      width={width - x + 50}
      // Rectangle Height + xAxisApproxHeight
      height={height + 140}
    />
  );
}

/**
 * This component renders the average sessions chart
 * @property { object[] } data
 * @returns { React.Component } A React component
 */
export default function AvgSessionChart({ data }: AvgSessionChartProps): JSX.Element {
  const getWeekDay = (val: number): string => {
    const weekDays = ["L", "M", "M", "J", "V", "S", "D"];
    return weekDays[val-1];
  }

  return (<>
        <AvgSessionsTitleStyled>
          Durée moyenne des sessions
        </AvgSessionsTitleStyled>
        <ResponsiveContainer width="100%" height="100%" >
            <LineChart 
                margin={{ top: 70, right: 30, left: 20, bottom: 40 }}
                style={{backgroundColor: `${theme.colors.accentRed}`, borderRadius: `${theme.borderRadius.medium}`}} 
                data={data}>
              <XAxis dataKey="day" axisLine={false} tickLine={false} tickFormatter={getWeekDay} tick={{fill: "white", opacity: .6, fontSize: "0.95rem"}} tickMargin={20} />
              <YAxis hide domain={['dataMin-10', 'dataMax+10']} />
              <Tooltip formatter={(value: number) => [`${value} min`]} labelStyle={{ display: "none" }} cursor={ <CustomCursor /> }/>
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