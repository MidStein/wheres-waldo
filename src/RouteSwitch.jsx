import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import ChooseDifficulty from "./components/ChooseDifficulty";
import PlayGame from "./components/PlayGame";
import EnterName from "./components/EnterName";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="BrowserRouter">
        <NavBar />
        <div className="Routes">
          <Routes>
            <Route path='/choose-difficulty' element={<ChooseDifficulty />} />
            <Route path='/play-game' element={<PlayGame />} />
            <Route path='/enter-name' element={<EnterName />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default RouteSwitch;

