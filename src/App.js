import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Agile from './Components/Agile/Agile';
import Map from './Components/Map/Map';
import Gallery from './Components/Gallery/Gallery';
import Partners from './Components/Partners/Partners';
import Contact from './Components/Contact/Contact';
import Container from '@material-ui/core/Container';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="md">
        <Main />
        <Agile />
        <Map />
        <Gallery />
        <Partners />
        <Contact />
      </Container>
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
