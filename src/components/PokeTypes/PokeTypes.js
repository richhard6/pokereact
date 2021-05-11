import { useEffect, useState, useRef } from 'react';
import './PokeTypes.css';

const PokeTypes = ({ types }) => {
  const checkType = () => {
    const types = document.querySelectorAll('.types');

    types.forEach((type) => {
      let typeOfPokemon = type.innerText;
      switch (typeOfPokemon) {
        case 'grass':
          type.classList.add('grass');
          break;
        case 'poison':
          type.classList.add('poison');
          break;
        case 'bug':
          type.classList.add('bug');
          break;
        case 'dark':
          type.classList.add('dark');
          break;
        case 'dragon':
          type.classList.add('dragon');
          break;
        case 'electric':
          type.classList.add('electric');
          break;
        case 'fighting':
          type.classList.add('fighting');
          break;
        case 'fire':
          type.classList.add('fire');
          break;
        case 'flying':
          type.classList.add('flying');
          break;
        case 'ghost':
          type.classList.add('ghost');
          break;
        case 'ground':
          type.classList.add('ground');
          break;
        case 'ice':
          type.classList.add('ice');
          break;
        case 'normal':
          type.classList.add('normal');
          break;
        case 'psychic':
          type.classList.add('psychic');
          break;
        case 'rock':
          type.classList.add('rock');
          break;
        case 'steel':
          type.classList.add('steel');
          break;
        case 'water':
          type.classList.add('water');
          break;
        default:
          break;
      }
    });
  };

  useEffect(() => {
    checkType();
  }, []);
  return (
    <>
      <h2 className="types">{types[0].type.name}</h2>
      <h2 className="types">{types[1]?.type.name}</h2>
    </>
  );
};

export default PokeTypes;
