import ChooseDifficulty from "./ChooseDifficulty";
import PlayGame from "./PlayGame";
import Leaderboard from "./Leaderboard";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <a href="https://github.com/MidStein/wheres-waldo" className="github-link">Where's Waldo</a>
    </header>
  );
}

export default NavBar;

