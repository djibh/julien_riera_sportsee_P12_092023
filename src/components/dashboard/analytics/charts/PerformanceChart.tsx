import { RadarChart, PolarGrid, PolarAngleAxis, Legend, Radar, ResponsiveContainer } from 'recharts';
import { theme } from '../../../../theme';

type PerformanceChartProps = {
  data: object[],
  categories: object
}

export default function PerformanceChart({ data, categories }: PerformanceChartProps) {
  console.log("Categories" + categories);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart 
          style={{backgroundColor: `${theme.colors.radarChartBlack}`, borderRadius:`${theme.borderRadius.medium}`}} 
          outerRadius={90}
          data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" />
        <Radar name="Mike" dataKey="value" stroke={theme.colors.radarChartRed} fill={theme.colors.radarChartRed} fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  )
}
