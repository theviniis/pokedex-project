import React from 'react';
import '../styles/SidenavCard.css';

const SidenavCard = () => {
  return (
    <ul>
      <li className='card'>Pokedex</li>
      <li className='card'>Moves</li>
      <li className='card'>Abilities</li>
      <li className='card'>Itens</li>
      <li className='card'>Locations</li>
      <li className='card'>Type Charts</li>
    </ul>
  );
};

export default SidenavCard;
