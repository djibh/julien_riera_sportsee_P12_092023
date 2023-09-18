import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
        <NavbarStyled>
          <div className="logo">
            <img src="/logo.png"/>
          </div>
          <div className="navbar-items">
              <Link to={"/"}>Accueil</Link>
              <Link to={"/"}>Profil</Link>
              <Link to={"/"}>Réglages</Link>
              <Link to={"/"}>Communauté</Link>
          </div>
        </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 18px 28px;

    .logo {
      display: grid;
      place-items: center;

      & img {
        width: 178px;
      }
    }

    .navbar-items {
      display: flex;
      justify-content: space-around;
      flex: 1;
    }
`;