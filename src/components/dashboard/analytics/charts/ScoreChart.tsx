import { RadialBarChart, RadialBar, Tooltip, ResponsiveContainer } from 'recharts';
import { theme } from '../../../../theme';

type ScoreChartProps = {
  score?: number
}

export default function ScoreChart({ score }: ScoreChartProps) {
  
  const data = [
    {
      "name": "18-24",
      "uv": score,
      "pv": 2400,
      "fill": "#8884d8"
    }
  ]
  
  return (
      <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            innerRadius="65%" 
            outerRadius="80%" 
            data={data} 
            startAngle={90} 
            endAngle={200}
            style={{backgroundColor: `${theme.colors.analyticsBackground}`, borderRadius: `${theme.borderRadius.medium}`}}
          >
            <RadialBar dataKey='uv'cornerRadius={10}/>
            <Tooltip />
          </RadialBarChart>
      </ResponsiveContainer>
  )
}