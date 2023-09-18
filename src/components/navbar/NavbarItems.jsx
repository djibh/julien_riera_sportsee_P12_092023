import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from '../../theme/index'

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
    align-items: center;
    flex: 1;
    font-size: 1.5rem;

    a {
        color: ${theme.colors.white};
    }
`;