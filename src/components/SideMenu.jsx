import styled from "styled-components";
import { theme } from "../theme";

export default function SideMenu() {
  return (
    <SideMenuStyled>
        <div className="category-filters">
            <img src="/icon.png" alt="icon1" />
            <img src="/icon-2.png" alt="icon2" />
            <img src="/icon-3.png" alt="icon3" />
            <img src="/icon-4.png" alt="icon4" />
        </div>
    </SideMenuStyled>
  )
}

const SideMenuStyled = styled.div`
    display: grid;
    max-width: 117px;
    place-items: center;
    background-color: ${theme.colors.black};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    .category-filters {
        display: flex;
        flex-direction: column;
        height: 80%;
        max-height: 40%;
        justify-content: space-between;

        & * {
            padding-block: 4px;
        }
    }
`;