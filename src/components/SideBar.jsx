import React from 'react';
import SearchBar from './SearchBar';
import '../styles/SideBar.css';
import BurgerIcon from './BurgerIcon';

const SideBar = () => {
  return (
    <aside>
      <div className='logo'>
        <img src='../img/logo.png' alt='Pokeball' />
        <span>Pokedex</span>
        <BurgerIcon />
      </div>
      <nav>
        <SearchBar />
        <ul>
          <li className='pokedex'>Pokedex</li>
          <li className='moves'>Moves</li>
          <li className='abilities'>Abilities</li>
          <li className='itens'>Itens</li>
          <li className='locations'>Locations</li>
          <li className='type'>Type Charts</li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
