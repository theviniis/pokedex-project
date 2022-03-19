import React from 'react';
import '../styles/PokeCard.css';
import { ReactComponent as Pokeball } from '../img/pokeball.svg';

const PokeCard = ({ name, types, image }) => {
  const style = `bg ${types[0].type.name}`;
  return (
    <div className={style}>
      <h1>{name}</h1>
      <ul>
        {types.map((type, index) => (
          <li key={index}>{type.type.name}</li>
        ))}
      </ul>
      <img src={image} alt={name} />
      <Pokeball className='pokeball-bg' width='300px' height='300px' />
    </div>
  );
};

export default PokeCard;
