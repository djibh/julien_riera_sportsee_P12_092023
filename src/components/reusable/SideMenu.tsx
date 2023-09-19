import styled from "styled-components";
import { theme } from "../../theme/index";

export default function SideMenu() {
  return (
    <SideMenuStyled>
        <div className="category-filters">
            <img src="/icon.png" alt="icon1" />
            <img src="/icon-2.png" alt="icon2" />
            <img src="/icon-3.png" alt="icon3" />
            <img src="/icon-4.png" alt="icon4" />
        </div>
        <h6>Copyright, SportSee 2023</h6>
    </SideMenuStyled>
  )
}

const SideMenuStyled = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    background-color: ${theme.colors.black};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

    .category-filters {
        display: flex;
        flex-direction: column;

        & * {
            padding-block: 8px;
        }
    }

    h6 {
        position: absolute;
        bottom: 1rem;
        color: ${theme.colors.white};
        font-size: 0.8rem;
        writing-mode: vertical-rl;
        transform: rotate(-180deg);
    }
`;