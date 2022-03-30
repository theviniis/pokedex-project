import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(url);

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    const createPokemonObject = (result) => {
      result.forEach(async (pokemon) => {
        const res = await fetch(`${url + pokemon.name}`);
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    };
    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  if (allPokemons === []) return null;
  return { allPokemons, loadMore };
};

export default useFetch;
