import logo from './logo.svg';
import './App.css';
import Jatekter from './tictactoe/Jatekter.js';
import { LISTA } from './tictactoe/adat.js';

/*const LISTA = {
  ["X", " ", "O", " ", " ", "X", "X", "O", " "]
}*/
function App() {
  LISTA = LISTA
  return (
    <div className="App">
      <header className="App-header">TicTacToeReact</header>
      <artice>
        <h2>hiphop</h2>
        <Jatekter LISTA={LISTA}/>
      </artice>
      <footer>Csorba Eszter</footer>
    </div>
  );
}

export default App;
