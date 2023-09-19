import { RadarChart, PolarGrid, PolarAngleAxis, Legend, Radar } from 'recharts';
import { theme } from '../../../../theme';

type PerformanceChartProps = {
  data: object[],
  categories: object
}

export default function PerformanceChart({ data, categories }: PerformanceChartProps) {
  console.log("Categories" + categories);

  return (
    <RadarChart style={{backgroundColor: `${theme.colors.radarChartBlack}`, borderRadius:`${theme.borderRadius.medium}`}} outerRadius={90} width={400} height={300} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <Radar name="Mike" dataKey="value" stroke={theme.colors.radarChartRed} fill={theme.colors.radarChartRed} fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  )
}
