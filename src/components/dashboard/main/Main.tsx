import styled from "styled-components";
import { theme } from "../../../theme/index";

type MainProps = {
    username: string
}

export default function Main({ username }: MainProps) {
  return (
             <MainStyled>
              <div className="center-main">
                <div className="greetings">
                  <h1>Bonjour, <span className="username">{username}</span></h1>
                  <h2>Félicitations ! Vous avez explosé vos objectifs d'hier !</h2>
                </div>
                <div className="analytics">
                  <div className="charts">
                  </div>
                  <div className="metrics">
                  </div>
                </div>
              </div>
            </MainStyled>
  )
}

const MainStyled = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    place-content: center;
    padding: 2em 5em;

    .center-main {
        height: 80vh;
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