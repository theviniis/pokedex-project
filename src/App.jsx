import React from 'react';
import SideBar from './components/SideBar';
import PokemonThumbnail from './components/PokemonThumbnail';
import PokeCard from './components/PokeCard';

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
  };

  React.useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <main className='app-container'>
      <SideBar />
      <section className='wrapper'>
        <h1 className='section-name'>Pokedex</h1>
        {allPokemons.map((pokemon, index) => (
          <PokeCard
            key={index}
            name={pokemon.name}
            types={pokemon.types}
            image={pokemon.sprites.other.dream_world.front_default}
          />
        ))}
      </section>
    </main>
  );
}
export default App;
