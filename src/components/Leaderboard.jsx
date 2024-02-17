import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { useLocation } from "react-router-dom";

const Leaderboard = () => {
  const location = useLocation();
  const [entries, setEntries] = useState([]);
  const [currPlayerData, setCurrPlayerData] = useState({});
  const [currPlayerRank, setCurrPlayerRank] = useState(0);

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

  // Load leaderboard data
  useEffect(() => {
    const getEntriesFromFirestore = async () => {
      const db = getFirestore();
      const leaderboardsRef = collection(db, `leaderboards${kebabToPascalCase(location.state.illustration)}`);
      setEntries((await getDocs(query(leaderboardsRef, orderBy("time")))).docs);
    }
    getEntriesFromFirestore();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Get current player rank
  useEffect(() => {
    for(let i = 0; i < entries.length; i += 1) {
      if (entries[i].id === location.state.currPlayerId) {
        setCurrPlayerRank(i + 1);
        break;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entries]);

  const formattedTimePassed = (timePassed) => {
    let displayTime;
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

  // Load current player data for not top 5 case
  useEffect(() => {
    (async () => {
      const db = getFirestore();
      const currPlayerRef = await getDoc(doc(
        db,
        `leaderboards${kebabToPascalCase(location.state.illustration)}`,
        location.state.currPlayerId
      ));
      setCurrPlayerData(currPlayerRef.data());
    })();
  });

  return (
    <div className="Leaderboard">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>

        <tbody>
          {entries.slice(0, 5).map((doc, ind) => {
            const docData = doc.data();
            if (doc.id === location.state.currPlayerId) {
              return (
                <tr key={doc.id} className="currPlayerRow">
                  <td>{ind + 1}</td>
                  <td>{docData.name}(You)</td>
                  <td>{formattedTimePassed(docData.time)}</td>
                </tr>
              );
            }
            return (
              <tr key={doc.id}>
                <td>{ind + 1}</td>
                <td>{docData.name}(You)</td>
                <td>{formattedTimePassed(docData.time)}</td>
              </tr>
            );
          })}

          {/* When player not in top 5 */}
          {(currPlayerRank > 5) && (
            <tr className="currPlayerRow">
              <td>{currPlayerRank}</td>
              <td>{currPlayerData.name}(You)</td>
              <td>{formattedTimePassed(currPlayerData.time)}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

