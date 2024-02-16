import { useNavigate } from "react-router-dom";

const ChooseDifficulty = () => {
  const navigate = useNavigate();

  const selectRandIllus = (difficulty) => {
    const easyIlls = ['in-town', 'ski-slopes', 'the-future'];
    const hardIlls = ['fairground', 'on-the-beach', 'sports-stadium', 'the-gold-rush'];

    const chosenIlls = difficulty === 'easy' ? easyIlls : hardIlls;

    const randIndex = Math.floor(Math.random() * chosenIlls.length)
    const illustration = chosenIlls[randIndex];

    navigate('/play-game', { state: { 
      illustration,
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

