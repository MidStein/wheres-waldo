import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import Game from './components/Game'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="BrowserRouter">
        <NavBar />
        <div className="Routes">
          <Routes>
            <Route path='/' element={<Game />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default RouteSwitch;

