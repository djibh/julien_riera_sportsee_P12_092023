import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import { theme } from '../../../../theme';

type ScoreChartProps = {
  score?: number
}

export default function ScoreChart({ score }: ScoreChartProps) {
  
  const newArray = [score]
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart style={{backgroundColor: `${theme.colors.chartsBackgroundColor}`}} width={100} height={100}>
        <Pie data={newArray} dataKey="todayScore" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill={theme.colors.accentRed} />
      </PieChart>
    </ResponsiveContainer>
  )
}
