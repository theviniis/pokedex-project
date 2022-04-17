import React from 'react';
import styled from 'styled-components';
import { globalStyles } from '../styles/themes';

const StyledCard = styled.div`
  border-radius: ${globalStyles.borderRadious};
  box-shadow: 5px 5px 13px ${(props) => props.theme.darkShadow},
    -5px -5px 13px ${(props) => props.theme.lightShadow};
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: linear-gradient(145deg, #d2d3d8, #f9faff);
  }

  &.active {
    box-shadow: inset 5px 5px 13px ${(props) => props.theme.darkShadow};
    inset: -5px -5px 13px ${(props) => props.theme.lightShadow};
    /* grid-column: span 2; */
    /* grid-row: span 2; */
  }
`;

const Card = ({ className, children, divTipe }) => {
  const [active, setActive] = React.useState(false);

  function handleClick(event) {
    setActive(!active);
    console.log(event.target);
  }

  return (
    <StyledCard
      onClick={handleClick}
      className={`${active ? 'active' : ''} ${className}`}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
