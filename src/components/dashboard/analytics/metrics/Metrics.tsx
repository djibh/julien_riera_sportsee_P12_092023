import styled from "styled-components";
import Card from "./Card";
import { calories, proteins, carbs, fat } from "../../../../assets/icons"
import useInfos from "../../../../hooks/useInfos";
import { useParams } from "react-router-dom";

/**
 * This component acts as a container for the metrics <Card/> components.
 * It also fetches the user ID and infos to be passed to those cards.
 * @returns { React.Component } A React component
 */
export default function Metrics(): JSX.Element {
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