import Header from './Header/Header';
import Main from './Main/Main';
import Map from './Map/Map';
import Gallery from './Gallery/Gallery';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Map />
      <Gallery />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p className="test">Test</p>
        <p className="win">Dodatni</p>
      </header>
    </div>
  );
}

export default App;
