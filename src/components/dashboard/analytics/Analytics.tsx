import styled from "styled-components";
import { theme } from "../../../theme/index";
import Charts from "./charts/Charts";
import Metrics from "./metrics/Metrics";

type MainProps = {
    username: string
}

/**
 * This component renders the main content whiche includes heading and charts
 * @prop { string } username
 * @returns { React.Component } A React component
 */
export default function Analytics({ username }: MainProps): JSX.Element {
  return (
             <AnalyticsStyled>
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
    position: absolute;
    top: 0;
    left: 100px;
    right: 0;
    display: grid;
    max-width: 1200px;
    margin: auto;
    justify-content: space-between;
    grid-template-columns: 1fr;
    padding: 3em;
    margin-top: 6em;

    .center-main {
        display: flex;
        flex-direction: column;
    }

    .greetings {
        margin-bottom: 2em;

        h1 {
          font-size: 2.2rem;
          margin: 0;
        }

        h2 {
          font-size: 1.4rem;
          margin-bottom: 0;
        }
        
        .username {
          color: ${theme.colors.accentRed};
        }
    }

    .analytics {
        display: flex;
        justify-content: space-between;
        gap: 1em;
        /* background: green; */
        padding: 0px;
        /* min-height: 450px; */
    }
`;