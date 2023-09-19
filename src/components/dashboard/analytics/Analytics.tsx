import styled from "styled-components";
import { theme } from "../../../theme/index";
import Charts from "./charts/Charts";
import Metrics from "./metrics/Metrics";

type MainProps = {
    username: string
}

export default function Analytics({ username }: MainProps) {
  return (
             <AnalyticsStyled
             >
              <div className="center-main">
                <div className="greetings">
                  <h1>Bonjour, <span className="username">{username}</span></h1>
                  <h2>Félicitations ! Vous avez explosé vos objectifs d'hier !</h2>
                </div>
                <div className="analytics">
                    <Charts />
                    <Metrics />
                </div>
              </div>
            </AnalyticsStyled>
  )
}

const AnalyticsStyled = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    padding: 5em;

    .center-main {
        display: flex;
        flex-direction: column;
    }

    .greetings {
        margin-bottom: 2em;

        h1 {
            margin: 0;
        }
        
        .username {
          color: ${theme.colors.accentRed};
        }
    }

    .analytics {
        display: flex;
        gap: 2em;
        height: 100%;
    }
`;