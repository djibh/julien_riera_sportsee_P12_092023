import { createContext } from "react";

type DashboardContextType = {
    firstName: string,
    score: number,
    keyData: {calorieCount: number, proteinCount: number, carbohydrateCount: number, lipidCount: number},
}

const DashboardContextInit = {
    firstName : "",
    score: 0,
    keyData : {calorieCount: 0, proteinCount: 0, carbohydrateCount: 0, lipidCount: 0},
}

const DashboardContext = createContext<DashboardContextType>(DashboardContextInit)

export default DashboardContext