import React from 'react';
import PokemonThumbnail from './components/PokemonThumbnail';

function App() {
  const [allPokemons, setAllPokemons] = React.useState([]);
  const [loadMore, setLoadMore] = React.useState(
    'https://pokeapi.co/api/v2/pokemon?limit=21'
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    {
      console.log(allPokemons);
    }
  };

  React.useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className='app-container'>
      <h1>Pokedex</h1>
      <div className='pokemon-container'>
        <div className='all-containers'>
          {allPokemons.map((pokemon, index) => (
            <PokemonThumbnail
              key={index}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              types={pokemon.types}
            />
          ))}
        </div>
        <button className='load-more' onClick={() => getAllPokemons()}>
          Load more
        </button>
      </div>
    </div>
  );
}
export default App;
