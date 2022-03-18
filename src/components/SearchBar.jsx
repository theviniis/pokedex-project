import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <i className='bx bx-search'></i>
      <input type='text' placeholder='Search Pokemon, Move, Ability etc' />
    </div>
  );
};

export default SearchBar;
