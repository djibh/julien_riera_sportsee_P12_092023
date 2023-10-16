import styled from "styled-components";
import Card from "./Card";
import { calories, proteins, carbs, fat } from "../../../../assets/icons"
import useInfos from "../../../../hooks/useInfos";
import { useParams } from "react-router-dom";

export default function Metrics() {
    const { id } = useParams()
    const { keyData } = useInfos(id)

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