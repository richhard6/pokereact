import React, { useState, useEffect } from 'react';
export const PokeContext = React.createContext();

const PokeContexto = (props) => {
  const [input, setInput] = useState('');
  const [pokemonStorage, setPokemonStorage] = useState([]);

  const pokeFilter = () => {
    let filteredPokes = pokemonStorage.filter((pokemon) => {
      return pokemon.name.includes(input);
    });
    return filteredPokes;
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=151`
    );

    const data = await response.json();
    setPokemonStorage(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PokeContext.Provider
      value={{ input, setInput, pokemonStorage, pokeFilter }}
    >
      {props.children}
    </PokeContext.Provider>
  );
};

export default PokeContexto;
