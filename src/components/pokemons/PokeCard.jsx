import React from 'react';
import styled from 'styled-components';
import { Tittle } from '../../styles/styles';

const PokemonCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 36px minmax(100px, auto);
  gap: 2rem 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  margin-right: 2rem;
`;

const PokeTittle = styled(Tittle)`
  grid-column: -1/1;
  height: 36px;
  text-transform: capitalize;
  font-weight: 600;
`;

const PokeTypes = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
`;

const PokeType = styled.li`
  padding: 1rem 2rem;
  font-size: 1rem;
  &:hover {
    background: initial;
  }
`;

const PokeImg = styled.img`
  place-self: flex-end;
  max-height: 110px;
  max-width: 110px;
  filter: drop-shadow(3px 2px 2px ${({ theme }) => theme.darkShadow});
`;

const PokeCard = ({ name, types, img }) => {
  const [active, setActive] = React.useState(false);

  function handleClick(event) {
    setActive(!active);
  }

  return (
    <PokemonCard
      className={`card  ${active ? 'active' : ''}`}
      onClick={handleClick}
    >
      <PokeTittle>{name}</PokeTittle>
      <PokeTypes>
        {types.map((type, index) => (
          <PokeType className='card' key={index}>
            {type.type.name}
          </PokeType>
        ))}
      </PokeTypes>
      <PokeImg src={img} alt={name} />
    </PokemonCard>
  );
};

export default PokeCard;
