import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { theme } from '../../../../theme';

type AvgSessionChartProps = {
  data: object[]
}

export default function AvgSessionChart({ data }: AvgSessionChartProps) {
  return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart style={{backgroundColor: `${theme.colors.lineChartRed}`, borderRadius: `${theme.borderRadius.medium}`}} 
           data={data}>
          <XAxis dataKey="day"/>
          <Tooltip />
          <Legend />
          <defs>
            <linearGradient id="paint0_linear_2_122" x1="309.906" y1="-1.97779" x2="-47.7754" y2="-1.97779" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="0.810441" stopColor="white" stopOpacity="0.403191"/>
            </linearGradient>
          </defs>
          <Line type="basis" dot={false} activeDot={true} dataKey="sessionLength" stroke="url(#paint0_linear_2_122)" strokeWidth={2}/>
        </LineChart>
      </ResponsiveContainer>
  )
}
