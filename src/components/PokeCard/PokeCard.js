import { useState, useEffect } from 'react';
import PokeInfo from '../PokeInfo/PokeInfo';
import useModal from '../../hooks/useModal';
import './PokeCard.css';

const PokeCard = ({ pokemon }) => {
  const [poke, setPoke] = useState([]);
  const { isShowing, toggle } = useModal();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(pokemon.url);

      const data = await response.json();
      setPoke(data);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [pokemon]);

  return (
    poke.id < 152 && (
      <>
        <div className="poke__card" onClick={toggle}>
          <h2>#{poke.id}</h2>
          <h3>{poke.name}</h3>
          <div className="underline"></div>

          <img
            src={poke.sprites ? poke.sprites.front_default : ''}
            alt="pokefront"
          />
        </div>

        <PokeInfo isShowing={isShowing} hide={toggle} poke={poke} />
      </>
    )
  );
};

export default PokeCard;
