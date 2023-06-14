import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import ChooseDifficulty from "./components/ChooseDifficulty";
import PlayGame from "./components/PlayGame"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="BrowserRouter">
        <NavBar />
        <div className="Routes">
          <Routes>
            <Route path='/choose-difficulty' element={<ChooseDifficulty />} />
            <Route path='/play-game' element={<PlayGame />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default RouteSwitch;

