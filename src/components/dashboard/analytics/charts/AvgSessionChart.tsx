import { LineChart, Line, XAxis, Tooltip, Legend } from 'recharts';
import { theme } from '../../../../theme';

type AvgSessionChartProps = {
  data: object[]
}

export default function AvgSessionChart({ data }: AvgSessionChartProps) {
  return (
      <LineChart style={{backgroundColor: `${theme.colors.lineChartRed}`, borderRadius: `${theme.borderRadius.medium}`}} 
        width={400} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="day"/>
        <Tooltip />
        <Legend />
        <Line type="basis" dot={false} activeDot={false} dataKey="sessionLength" stroke={theme.colors.lineChartGrey} strokeWidth={3}/>
      </LineChart>
  )
}
