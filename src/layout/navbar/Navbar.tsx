import styled from "styled-components";
import Logo from "../../components/reusable/Logo";
import NavbarItems from "./NavbarItems";
import { theme } from "../../theme/index";

export default function Navbar() {
  return (
        <header>
          <NavbarStyled>
            <Logo />
            <NavbarItems />
          </NavbarStyled>
        </header>
  )
}

const NavbarStyled = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 18px 28px;
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    gap: 4em;
`;