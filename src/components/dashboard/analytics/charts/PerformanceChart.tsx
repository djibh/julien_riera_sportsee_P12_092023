import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
import { theme } from '../../../../theme';

type PerformanceChartProps = {
  data: object[],
  categories: object
}

export default function PerformanceChart({ data, categories }: PerformanceChartProps) {
  // let ticks = []
  // Object.keys(categories).forEach((key) => {
  //   ticks.push(categories[key])
  // })
  // console.log(ticks);

  return (
    <ResponsiveContainer width="100%" height="100%" className="position">
      <RadarChart 
          style={{backgroundColor: `${theme.colors.chartsBlack}`, borderRadius:`${theme.borderRadius.medium}`}} 
          outerRadius={80}
          data={data}>
        <PolarGrid gridType='polygon' radialLines={false} />
        <PolarAngleAxis dataKey="kind" />
        <Radar dataKey="value" stroke={theme.colors.radarChartRed} fill={theme.colors.radarChartRed} fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
