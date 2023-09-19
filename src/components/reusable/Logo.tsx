import styled from "styled-components";
import logo from "/logo.png"

export default function Logo() {
  return <LogoStyled className="logo">
            <img src={logo}/>
        </LogoStyled>
}

const LogoStyled = styled.div`
    display: grid;
    place-items: center;

    & img {
    width: 178px;
    }
`;