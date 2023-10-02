import styled from "styled-components";
import { theme } from "../../../../theme";

type CardProps = {
  Icon: JSX.Element
  keyData: number
}

export default function Card({ Icon, keyData }: CardProps) {
  return (
    <CardStyled>
      <div className="card__icon">
        {Icon && Icon}
      </div>
      <div className="card__data">        
        <span>{keyData}</span>
        <span>Calories</span>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.article`
  background: ${theme.colors.analyticsBackground};
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
  box-sizing: border-box;
  font-size: 1rem;
  height: 23%;
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