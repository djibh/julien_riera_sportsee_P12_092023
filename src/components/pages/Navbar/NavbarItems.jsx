import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavbarItems() {
  return <NavbarItemsStyled className="navbar-items">
            <Link to={"/"}>Accueil</Link>
            <Link to={"/"}>Profil</Link>
            <Link to={"/"}>Réglages</Link>
            <Link to={"/"}>Communauté</Link>
        </NavbarItemsStyled>
}

const NavbarItemsStyled = styled.div`
    display: flex;
    justify-content: space-around;
    flex: 1;
`;