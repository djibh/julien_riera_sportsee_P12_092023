import styled from "styled-components";
import { theme } from "../../../../theme";

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
    border-radius: ${theme.borderRadius.medium};
`;