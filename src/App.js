import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokeContexto from './providers/pokesearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <PokeContexto>
        <Header />
        <CardList />
      </PokeContexto>
    </div>
  );
}

export default App;
