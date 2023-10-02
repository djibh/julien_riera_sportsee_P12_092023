import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from '../../theme/index';

export default function NavbarItems() {
  return <NavbarItemsStyled className="navbar-items">
            <Link to={"/"}>Accueil</Link>
            <Link to={"/"}>Profil</Link>
            <Link to={"/settings"}>Réglages</Link>
            <Link to={"/"}>Communauté</Link>
        </NavbarItemsStyled>
}

const NavbarItemsStyled = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 1;
    /* max-width: 0%; */
    font-size: 1.4rem;

    a {
        color: ${theme.colors.white};
    }
`;