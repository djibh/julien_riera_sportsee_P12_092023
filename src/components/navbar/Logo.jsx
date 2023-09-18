import styled from "styled-components";

export default function Logo() {
  return <LogoStyled className="logo">
            <img src="/logo.png"/>
        </LogoStyled>
}

const LogoStyled = styled.div`
    display: grid;
    place-items: center;

    & img {
    width: 178px;
    }
`;