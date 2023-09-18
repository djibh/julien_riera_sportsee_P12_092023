import styled from "styled-components";
import Logo from "./Logo";
import NavbarItems from "./NavbarItems";
import { theme } from "../../../theme";

export default function Navbar() {
  return (
        <NavbarStyled>
          <Logo />
          <NavbarItems />
        </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 18px 28px;
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
`;