import { Home, Login, NewDetails, Favorites } from './pages';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { LoadingScreen } from './components';

function App() {
  return (    
    <HashRouter>
      <Container>
        <LoadingScreen/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productos/:id" element={<NewDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
