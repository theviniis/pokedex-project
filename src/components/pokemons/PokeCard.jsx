import React from 'react';
import styled from 'styled-components';
import { Tittle } from '../../styles/styles';
import Card from '../Card';

const PokemonCard = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 36px 1fr;
  gap: 1rem;
  padding: 1rem;
`;

const PokeTittle = styled(Tittle)`
  grid-column: -1/1;
`;

const PokeTypes = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
`;

const PokeType = styled(Card)`
  padding: 0.5rem 1rem;
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
  return (
    <PokemonCard>
      <PokeTittle>{name}</PokeTittle>
      <PokeTypes>
        {types.map((type, index) => (
          <PokeType divTipe='li' key={index}>
            {type.type.name}
          </PokeType>
        ))}
      </PokeTypes>
      <PokeImg src={img} alt={name} />
    </PokemonCard>
  );
};

export default PokeCard;
