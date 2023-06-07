import { useState } from 'react';
import ChooseDifficulty from './ChooseDifficulty';
import ContinueGame from './ContinueGame';

const Game = () => {
  const [illustrationPlaying, setIllustrationPlaying] = useState('');

  const selectRandIllus = (difficulty) => {
    if (difficulty === 'easy') {
      setIllustrationPlaying('in-town');
    } else {
      setIllustrationPlaying('in-town');
    }
  }

  return (
      illustrationPlaying ? (
          <ContinueGame illustrationPlaying={illustrationPlaying} />
        ) : (
          <ChooseDifficulty selectRandIllus={selectRandIllus} />
        )
  );
};

export default Game;

