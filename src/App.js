import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Agile from './Components/Agile/Agile';
import Map from './Components/Map/Map';
import Gallery from './Components/Gallery/Gallery';
import Partners from './Components/Partners/Partners';
import Contact from './Components/Contact/Contact';
import Container from '@material-ui/core/Container';
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
    </div>
  );
}

export default App;
