import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { theme } from "../../../../theme/index";

type ActivityChartProps = {
  data: object[]
}

export default function ActivityChart({ data }: ActivityChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={300}
          height={100}
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 5,
            bottom: 5,
          }}
          style={{backgroundColor: `${theme.colors.radialBarBackground}`, borderRadius: `${theme.borderRadius.medium}`}}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={`${theme.colors.barChartGridGrey}`}/>
          <XAxis dataKey="day"  />
          <YAxis/>
          <Tooltip />
          <Legend 
            verticalAlign='top' 
            align='right'
            wrapperStyle={{margin: -10, fontSize: 12}} 
            payload={
                [
                    {id: 'kg', value: 'kilogram', type: 'circle', color: `${theme.colors.barChartBlack}`},
                    {id: 'cal', value: 'calories', type: 'circle', color: `${theme.colors.barChartRed}`}
                ]
            }/>
          <Bar id='kg' dataKey="kilogram" maxBarSize={8} fill={theme.colors.barChartBlack} radius={[4, 4, 0, 0]}/>
          <Bar id='cal' dataKey="calories" maxBarSize={8} fill={theme.colors.barChartRed} radius={[4, 4, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
  )
}
