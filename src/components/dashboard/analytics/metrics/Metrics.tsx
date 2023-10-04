import styled from "styled-components";
import Card from "./Card";
import { calories, proteins, carbs, fat } from "../../../../assets/icons"
import { useContext } from "react";
import DashboardContext from "../../../../context/DashboardContext";

export default function Metrics() {
    const { keyData } = useContext(DashboardContext)

    return (
        <MetricsStyled>
            <Card Icon={calories} keyData={keyData.calorieCount} unit="Calories"/>
            <Card Icon={proteins} keyData={keyData.proteinCount} unit="Protéines"/>
            <Card Icon={carbs} keyData={keyData.carbohydrateCount} unit="Glucides"/>
            <Card Icon={fat} keyData={keyData.lipidCount} unit="Lipides"/>
        </MetricsStyled>
    )
}

const MetricsStyled = styled.div`
    width: 23%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;