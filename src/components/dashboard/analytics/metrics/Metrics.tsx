import styled from "styled-components";

export default function Metrics() {
    return (
        <MetricsStyled>
            Metric cards
        </MetricsStyled>
    )
}

const MetricsStyled = styled.div`
    width: 30%;
    padding: 10px;
    background: red;
    color: white;
    font-size: 2rem;
`;