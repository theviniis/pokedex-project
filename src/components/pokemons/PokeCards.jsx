import React, { useState } from 'react';
import styled from 'styled-components';
import PokeCard from './PokeCard';

const PokemonCardsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const PokeCards = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadmore] = React.useState(
    'https://pokeapi.co/api/v2/pokemon/?limit=21'
  );

  async function getPokemonsID() {
    const response = await fetch(loadMore);
    const json = await response.json();

    setLoadmore(json.next);

    async function createPokemonObjects(result) {
      result.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const json = await response.json();

        setAllPokemons((currentList) => [...currentList, json]);
      });
    }
    createPokemonObjects(json.results);
  }

  React.useEffect(() => {
    getPokemonsID();
  }, []);

  console.log(allPokemons);
  return (
    <PokemonCardsSection>
      {allPokemons.map((pokemon) => (
        <PokeCard
          key={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          img={pokemon.sprites.other.dream_world.front_default}
        />
      ))}
    </PokemonCardsSection>
  );
};

export default PokeCards;
