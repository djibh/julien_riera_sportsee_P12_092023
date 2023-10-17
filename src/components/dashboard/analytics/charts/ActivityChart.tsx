import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { theme } from "../../../../theme/index";
import styled from 'styled-components';

type ActivityChartProps = {
  data: object[]
}

/**
 * This component renders a custom tooltip for the activity chart.
 * @property { boolean } active
 * @property { TooltipProps<ValueType, NameType> } payload
 * @returns { React.Component } A React component
 */
function CustomToolTip({ active, payload }: TooltipProps<ValueType, NameType>): JSX.Element {
	if (active && payload && payload.length) {
		return (
			<CustomToolTipStyled>
				<p>{payload[0].value + 'kg'}</p>
				<p>{payload[1].value + 'Kcal'}</p>
			</CustomToolTipStyled>
		)
	}
	return <p>Something went wrong with the activity tooltip</p>
}

const CustomToolTipStyled = styled.div`
    padding: 4px 8px;
    background-color: red;
    color: white;
    font-size: 0.8rem;
    text-align: center;
`;

/**
 * This component renders a custom tooltip for the activity chart.
 * @property { object[] } data
 * @returns { React.Component } A React component
 */
export default function ActivityChart({ data }: ActivityChartProps): JSX.Element {
  return ( <>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={300}
          height={100}
          data={data}
          barGap={8}
          margin={{
            top: 15,
            right: 30,
            left: 25,
            bottom: 5,
          }}
          style={{backgroundColor: `${theme.colors.analyticsBackground}`, borderRadius: `${theme.borderRadius.medium}`}}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={`${theme.colors.barChartGridGrey}`}/>
          <XAxis dataKey="day" tickLine={false} tick={{ fill: '#9B9EAC' }} dy={10} tickFormatter={(day) => new Date(day).getDate().toString()}/>
          <YAxis yAxisId="right" orientation='right' tick={{ fill: '#9B9EAC' }} type='number' tickLine={false} axisLine={false} domain={['dataMin - 2', 'dataMax + 2']} dx={20}/>
          <YAxis hide={true} />
          <Tooltip formatter={(val, name) => `${val} ${name}`} content={<CustomToolTip />} contentStyle={{backgroundColor: "red", color: "white"}} itemStyle={{color: "white" }}/>
          <Legend 
            verticalAlign='top' 
            align='right'
            height={40}
            wrapperStyle={{margin: 0, fontSize: 12}} 
            payload={
                [
                    {id: 'kg', value: 'Poids (kg)', type: 'circle', color: `${theme.colors.chartsBlack}`},
                    {id: 'cal', value: 'Calories brûlées (Kcal)', type: 'circle', color: `${theme.colors.barChartRed}`}
                ]
            }/>
          <Bar id='kg' yAxisId="right" dataKey="kilogram" barSize={8} fill={theme.colors.chartsBlack} radius={[4, 4, 0, 0]}/>
          <Bar id='cal' dataKey="calories" barSize={8} fill={theme.colors.barChartRed} radius={[4, 4, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
      <ActivityTitleStyled>Activité quotidienne</ActivityTitleStyled>

      </>
  )
}

const ActivityTitleStyled = styled.span`
  position: absolute;
  margin: 0;
  font-size: 1rem;
  padding: 15px 25px;
  color: ${theme.colors.chartsTitleDark}
`;