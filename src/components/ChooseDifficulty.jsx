import { useNavigate } from "react-router-dom";

const ChooseDifficulty = () => {
  const navigate = useNavigate();

  const selectRandIllus = () => {
    navigate('/play-game', { state: { 
      illustration: 'in-town',
      gameUnderProgress: true
    }});
  } 

  return (
    <div className="ChooseDifficulty">
      <div className="diffSelectionBox">
        <div>Choose Difficulty</div>

        <div className="difficulties">
          <button onClick={() => { selectRandIllus('easy') }}>
            Easy (fewer people)
          </button>
          <button onClick={() => { selectRandIllus('hard') }}>
            Hard (more people)
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChooseDifficulty;

