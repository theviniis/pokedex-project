import React from 'react';

const PokeCard = ({ name, types, image }) => {
  return (
    <div>
      <h1>{name}</h1>
      <ul>
        {types.map((type) => {
          <li>{type.type.name}</li>;
          // console.log(type.type.name);
        })}
      </ul>
      <img src={image} alt={name} />
    </div>
  );
};

export default PokeCard;
