import { mockData } from "../../../data/mockData";
import ActivityChart from './charts/ActivityChart';

export default function Charts() {

  const activity = mockData.USER_ACTIVITY[0].sessions

  return (
    <ActivityChart data={activity} />
  )
}
