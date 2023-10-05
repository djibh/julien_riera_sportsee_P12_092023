import styled from "styled-components";
import logo from "/logo.png"

type LogoProps =  { classname?: string }

export default function Logo({ classname }: LogoProps) {
  return <LogoStyled className={ classname }>
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