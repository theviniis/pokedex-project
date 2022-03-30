import React from 'react';
import '../styles/PokemonCard.css';

const PokemonCard = ({ name, image, types }) => {
  return (
    <section className='pokemon-card card'>
      <h1 className='pokemon-name'>{name}</h1>
      <ul className='pokemon-types'>
        {types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
      <img className='pokemon-img' src={image} alt={name} />
    </section>
  );
};

export default PokemonCard;
