import { useNavigate } from "react-router-dom";

const ChooseDifficulty = () => {
  const navigate = useNavigate();

  const selectRandIllus = (difficulty) => {
    let illustration;
    const easyIlls = ['in-town', 'ski-slopes', 'the-future'];
    const hardIlls = ['fairground', 'on-the-beach', 'sports-stadium', 'the-gold-rush'];

    if (difficulty === 'easy') {
      const randOutOf3 = Math.floor(Math.random() * 3 + 1);
      illustration = easyIlls[randOutOf3 - 1];
    } else {
      const randOutOf4 = Math.floor(Math.random() * 4 + 1);
      illustration = hardIlls[randOutOf4 - 1];
    }

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

