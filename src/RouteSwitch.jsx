import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import './RouteSwitch.css';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* <Route path='/' element={<App />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;

