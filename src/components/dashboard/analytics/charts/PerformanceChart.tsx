import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Text, TooltipProps } from 'recharts';
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import { theme } from '../../../../theme';

type PerformanceChartProps = {
  data: object[],
  payload: TooltipProps<ValueType, NameType>
  x: number,
  y: number,
  cx: number,
  cy: number
}

export default function PerformanceChart({ data }: PerformanceChartProps) {
  function renderPolarAngleAxis({ payload, x, y, cx, cy, ...rest }: PerformanceChartProps) {
    const getFrenchCategories = (kindKey: string): string => {
      const categories = {
        1: "Cardio",
        2: "Energie",
        3: "Endurance",
        4: "Force",
        5: "Vitesse",
        6: "Intensité"
      };
      return categories[kindKey];
    };
    
    return (
      <Text
        {...rest}
        verticalAnchor="middle"
        y={y + (y - cy) / 15}
        x={x + (x - cx) / 15}
        fill="#fff"
        fontSize="12px"
      >
        {getFrenchCategories(payload.value)}
      </Text>
    );
  }


  return (
    <ResponsiveContainer width="100%" height="100%" className="position">
      <RadarChart 
          style={{backgroundColor: `${theme.colors.chartsBlack}`, borderRadius:`${theme.borderRadius.medium}`}} 
          outerRadius={80}
          innerRadius={10}
          data={data}>
        <PolarGrid gridType='polygon' radialLines={false} />
        <PolarAngleAxis dataKey="kind" tick={props => renderPolarAngleAxis(props)} />
        <Radar dataKey="value" stroke={theme.colors.radarChartRed} fill={theme.colors.radarChartRed} fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
