import React, { useState, useEffect } from 'react';
import { MainContext } from '../context.js';
import CharacterOptions from './CharacterOptions.js';
import FriendlyParty from './FriendlyParty.js';
import EnemyTeam from './EnemyTeam.js';
import Fight from './Fight.js';

const App = () => {
  const [characterOptionsArray, setCharacterOptionsArray] = useState([]);
  const [friendlyParty, setFriendlyParty] = useState([]);
  const [numberOfAllies, setNumberOfAllies] = useState(0);
  const [enemyTeam, setEnemyTeam] = useState([]);
  const [numberOfEnemies, setNumberOfEnemies] = useState(0);
  const [modalIsShowing, setModalIsShowing] = useState(false);

  return (
    <div>
      <MainContext.Provider value={{
        characterOptionsArray, setCharacterOptionsArray,
        friendlyParty, setFriendlyParty,
        numberOfAllies, setNumberOfAllies,
        enemyTeam, setEnemyTeam,
        numberOfEnemies, setNumberOfEnemies,
        modalIsShowing, setModalIsShowing
      }}>
        <div className="header" >
          <div className="headerTitle">Encounter Builder</div>
        </div>
        <div>
          <CharacterOptions />
        </div>
        <div className="teamsContainer">
          <FriendlyParty />
          <Fight />
          <EnemyTeam />
        </div>
      </MainContext.Provider>
    </div>
  )
}

export default App;