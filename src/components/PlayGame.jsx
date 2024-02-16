import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import waldo from "../images/characters/waldo.png";
import wizard from "../images/characters/wizard.png";
import wilma from "../images/characters/wilma.png";
import odlaw from "../images/characters/odlaw.png";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const PlayGame = () => {
  const [currentlyTargeted, setCurrentlyTargeted] = useState('');
  const [foundCnt, setFoundCnt] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const illustrationName = location.state.illustration;
  const storage = getStorage();
  const illustrationRef = ref(storage, `illustrations/${illustrationName}.jpg`);
  const [illustrationUrl, setIllustrationUrl] = useState();
  const [timePassed, setTimePassed] = useState(0);

  // Load illustration when page loads
  useEffect(() => {
    const fetchImageUrl = async () => {
      setIllustrationUrl(await getDownloadURL(illustrationRef));
    }
    fetchImageUrl();

    const oneSecondInterval = setInterval(() => {
      setTimePassed((timePassed) => (timePassed + 1));
    }, 1000);

    return () => {
      setTimePassed(0);
      clearInterval(oneSecondInterval);
    };
  }, []);

  // When all characters identified pop confetti and navigate to EnterName
  useEffect(() => {
    if (foundCnt === 4) {
      const confetti = document.querySelector('.confetti-screen');
      confetti.style.display = 'block';
      setTimeout(() => {
        navigate('/enter-name', { state: {
          illustration: illustrationName,
          timePassed
        }});
      }, 2000);
    }
  }, [foundCnt]);

  // Display timePassed in hh:mm:ss format
  const formattedTime = () => {
    const seconds = timePassed % 60;
    const minutes = Math.floor(timePassed / 60);
    const hours = Math.floor(timePassed / 3600);

    let secondsStr = seconds.toString();
    let minutesStr = minutes.toString();
    let hoursStr = '0' + hours.toString();
    if (Math.floor(seconds / 10) === 0) {
      secondsStr = '0' + secondsStr;
    }
    if (Math.floor(minutes / 10) === 0) {
      minutesStr = '0' + minutesStr;
    }

    return `${hoursStr} : ${minutesStr} : ${secondsStr}`;
  }

  const toggleBoxPopUp = (e) => {
    const dialogBox = document.querySelector('.character-dialog-box');
    if (currentlyTargeted) {
      currentlyTargeted.classList.remove('pop-up');
      setCurrentlyTargeted('');

      dialogBox.style.display = 'none';
      dialogBox.classList.remove('show-left');
      dialogBox.classList.remove('show-right');
    } else if (!e.target.classList.contains('found') && foundCnt !== 4) {
      e.target.classList.add('pop-up');
      setCurrentlyTargeted(e.target);

      dialogBox.style.display = "block";
      if (e.clientX < window.innerWidth / 2) {
        dialogBox.classList.add('show-right');
      } else {
        dialogBox.classList.add('show-left');
      }
    }
  }

  const validateUserSelection = async (e) => {
    const feedback = document.querySelector('.feedback');
    feedback.style.display = 'block';

    // Check if correct box selected and if so increment count
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, 'locations'));
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      if (docData.illustration === illustrationName) {
        let target = e.target;
        if (target.classList.contains('character-pic')) {
          target = target.parentElement;
        }
        if (docData[target.textContent.toLowerCase()].toString() === currentlyTargeted.getAttribute('data-element')) {
          currentlyTargeted.classList.add('found');
          feedback.classList.add('correct');
          setFoundCnt(foundCnt + 1);
        } else {
          feedback.classList.add('wrong');
        }
      }
    });

    toggleBoxPopUp(e);

    // Remove user feedback after 2 seconds
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
    feedback.style.display = 'none';
    feedback.classList.remove('correct', 'wrong');
  }

  return (
    <div
      style={{ backgroundImage: `url(${illustrationUrl})` }}
      className="PlayGame"
    >
      <div className="illustration-container">
        {
          [...Array(400)]
            .map((_, i) => (<div data-element={i} onClick={toggleBoxPopUp}></div>))
        }
      </div>

      <div className="character-dialog-box" style={{ display: "none" }}>
        <div className="who-is-it-question">Who is it?</div>
        <div className="character-cards">
          <div onClick={validateUserSelection}>
            <div
              style={{ backgroundImage: `url(${waldo})` }}
              className="character-pic"
            >
            </div>
            <div className="character-name">Waldo</div>
          </div>
          <hr />
          <div onClick={validateUserSelection}>
            <div
              style={{ backgroundImage: `url(${wizard})` }}
              className="character-pic"
            >
            </div>
            <div className="character-name">Wizard</div>
          </div>
          <hr />
          <div onClick={validateUserSelection}>
            <div
              style={{ backgroundImage: `url(${wilma})` }}
              className="character-pic"
            >
            </div>
            <div className="character-name">Wilma</div>
          </div>
          <hr />
          <div onClick={validateUserSelection}>
            <div
              style={{ backgroundImage: `url(${odlaw})` }}
              className="character-pic"
            >
            </div>
            <div className="character-name">Odlaw</div>
          </div>
        </div>
      </div>

      <div className="feedback" style={{ display: "none" }}></div>

      <div className="confetti-screen" style={{ display: "none" }}></div>

      <div className="timer">{formattedTime()}</div>
    </div>
  );
};

export default PlayGame;

