import styled from "styled-components";
import Logo from "./Logo";
import NavbarItems from "./NavbarItems";

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
`;