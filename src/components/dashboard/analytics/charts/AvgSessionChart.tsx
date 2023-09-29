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
          <Line type="basis" dot={false} activeDot={true} dataKey="sessionLength" stroke={theme.colors.lineChartGrey} strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>
  )
}
