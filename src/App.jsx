import React from 'react';
import Footer from './components/Footer';
import PokemonCard from './components/PokemonCard';
import SidenavCard from './components/SidenavCard';
import useFetch from './components/useFetch';

function App() {
  const { allPokemons } = useFetch('https://pokeapi.co/api/v2/pokemon/');
  return (
    <main className='grid-template'>
      <section className='pokemons-container'>
        {allPokemons.map((pokemon, index) => {
          return (
            <PokemonCard
              key={index}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              types={pokemon.types}
            />
          );
        })}
      </section>
      <aside className='side-nav'>
        <nav>
          <SidenavCard />
        </nav>
      </aside>
    </main>
  );
}
export default App;
