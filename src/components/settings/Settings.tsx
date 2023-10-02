import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Settings() {
  return (
    <SettingsPageStyled>
        <div>Settings</div>
        <Link to={"/"}>Back to homepage</Link>
    </SettingsPageStyled>
  )
}

const SettingsPageStyled = styled.div`
    display: grid;
    place-items: center;
    font-size: 7rem;
    margin: auto;
`