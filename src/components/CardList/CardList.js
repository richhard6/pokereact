import { useState, useEffect, useContext } from 'react';
import PokeCard from '../PokeCard/PokeCard';
import { PokeContext } from '../../providers/pokesearch';

import './CardList.css';

const CardList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [counter, setCounter] = useState(0);
  const { input } = useContext(PokeContext);

  const { pokeFilter } = useContext(PokeContext);

  const fetchData = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=9&offset=${counter}`
    );

    const data = await response.json();
    setPokemons(data.results);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [counter]);

  const checkNumber = (number) => {
    if (number < 0) {
      return 142;
    }
    if (number > 151) {
      return 0;
    }
    return number;
  };

  const nextPokemons = () => {
    setCounter((counter) => {
      let newCounter = counter + 9;
      return checkNumber(newCounter);
    });
  };

  const prevPokemons = () => {
    setCounter((counter) => {
      let newCounter = counter - 9;
      return checkNumber(newCounter);
    });
  };

  return input === '' ? (
    <article className="background__poke">
      <div className="poke__list">
        {pokemons.map((pokemon, index) => {
          return <PokeCard pokemon={pokemon} key={index} />;
        })}
      </div>
      <div className="button__container">
        <button className="button" onClick={prevPokemons}>
          Previous
        </button>
        <button className="button" onClick={nextPokemons}>
          Next
        </button>
      </div>
    </article>
  ) : (
    <article className="background__poke">
      <div className="poke__list">
        {pokeFilter().map((pokemon, index) => {
          return <PokeCard pokemon={pokemon} key={index} />;
        })}
      </div>
    </article>
  );
};

export default CardList;
