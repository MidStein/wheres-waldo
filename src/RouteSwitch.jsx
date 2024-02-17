import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import TitleBar from "./components/TitleBar";
import ChooseDifficulty from "./components/ChooseDifficulty";
import PlayGame from "./components/PlayGame";
import EnterName from "./components/EnterName";
import Leaderboard from "./components/Leaderboard";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="BrowserRouter">
        <TitleBar />
        <div className="Routes">
          <Routes>
            <Route path='/' element={<ChooseDifficulty />} />
            <Route path='/play-game' element={<PlayGame />} />
            <Route path='/enter-name' element={<EnterName />} />
            <Route path='/leaderboard' element={<Leaderboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default RouteSwitch;

