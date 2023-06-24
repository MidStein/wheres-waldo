import { useLocation, useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const EnterName = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const formattedTimePassed = () => {
    let displayTime;
    const timePassed = location.state.timePassed;
    const seconds = timePassed % 60;
    const minutes = Math.floor(timePassed / 60);
    const hours = Math.floor(timePassed / 3600);

    displayTime = seconds + 'sec';
    if (minutes > 0) {
      displayTime = minutes + 'min ' + displayTime;
    }
    if (hours > 0) {
      displayTime = hours + 'hr ' + displayTime;
    }
    return displayTime;
  }

  const kebabToPascalCase = (kebabStr) => {
    let pascalStr = kebabStr.charAt(0).toUpperCase();
    let ind = 1;
    while (ind < kebabStr.length) {
      if (kebabStr.charAt(ind) === '-') {
        ind += 1;
        pascalStr += kebabStr.charAt(ind).toUpperCase();
      } else {
        pascalStr += kebabStr.charAt(ind);
      }
      ind += 1;
    }
    return pascalStr;
  }

  const submitForLeaderboards = async () => {
    const db = getFirestore();
    const nameAndTime = {
      name: document.getElementById('name').value,
      time: location.state.timePassed
    };
    const currPlayerRef = await addDoc(
      collection(db, `leaderboards${kebabToPascalCase(location.state.illustration)}`),
      nameAndTime
    );

    navigate('/leaderboard', { state: {
      illustration: location.state.illustration,
      currPlayerId: currPlayerRef.id
    }});
  }

  return (
    <div className="EnterName">
      <div className="nameInputBox">
        <div>
          <span>Your Name: </span>
          <input id="name" type="text" maxLength={10} autoFocus />
        </div>

        <div>
          <span>Your Time: </span>
          <span>{formattedTimePassed()}</span>
        </div>

        <button onClick={submitForLeaderboards} autoFocus>Submit</button>
      </div>
    </div>
  );
};

export default EnterName;

