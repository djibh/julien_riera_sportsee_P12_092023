import styled from "styled-components";
import { theme } from "../../../../theme";

type CardProps = {
  Icon: JSX.Element
  keyData: number,
  unit: string
}

export default function Card({ Icon, keyData, unit }: CardProps) {
  return (
    <CardStyled>
      <div className="card__icon">
        { Icon && Icon }
      </div>
      <div className="card__data">        
        <span>{ keyData }</span>
        <span>{ unit }</span>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.article`
  background: ${theme.colors.analyticsBackground};
  display: flex;
  gap: 16px;
  padding-inline: 16px;
  align-items: center;
  box-sizing: border-box;
  font-size: 1rem;
  height: 20%;
  border-radius: ${theme.borderRadius.medium};

  .card__icon {
    width: 60px;
    height: 60px;
  }

  .card__data {
    display: flex;
    flex-direction: column;
  }
`;