import styled from "styled-components";
import { theme } from "../../../theme/index";
import Charts from "./Charts";

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
                  <div className="charts">
                    <Charts />
                  </div>
                  <div className="metrics">
                  </div>
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
        height: 70vh;
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

    .charts {
        width: 70%;
        background: ${theme.colors.chartsBackgroundColor};
    }

    .metrics {
        width: 30%;
        background: red;
    }


`;