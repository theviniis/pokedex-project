import React from 'react';

const PokemonThumbnail = ({ name, image, types }) => {
  const style = `poke-card ${types[0].type.name}`;
  return (
    <div className={style}>
      <h3>{name}</h3>
      <ul className='types'>
        {types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
      <img src={image} alt={name} />
    </div>
  );
};

export default PokemonThumbnail;
