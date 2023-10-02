import styled from "styled-components";
import Card from "./Card";
import { calories, proteins, carbs, fat } from "../../../../assets/icons"

export default function Metrics() {


    const data = {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50
    }

    return (
        <MetricsStyled>
            <Card Icon={calories} keyData={data.calorieCount}/>
            <Card Icon={proteins} keyData={data.proteinCount}/>
            <Card Icon={carbs} keyData={data.carbohydrateCount}/>
            <Card Icon={fat} keyData={data.lipidCount}/>
        </MetricsStyled>
    )
}

const MetricsStyled = styled.div`
    width: 23%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;