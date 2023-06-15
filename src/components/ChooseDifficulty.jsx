const ChooseDifficulty = ({ selectRandIllus }) => {
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

