import logo from '../../assets/pokeball.png';
import './Header.css';
import { useContext } from 'react';
import { PokeContext } from '../../providers/pokesearch';

const Header = () => {
  const { setInput } = useContext(PokeContext);

  const getInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <header className="header__container">
      <img src={logo} className="header__logo" alt="pokedex" />
      <input
        placeholder="search a pokemon"
        className="header__input"
        onChange={getInput}
      />
      <h2> Pokedex App</h2>
    </header>
  );
};

export default Header;
