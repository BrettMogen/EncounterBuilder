import React, { useState, useEffect } from 'react';
import { MainContext } from '../context.js';
import Axios from 'axios';
import CharacterOptions from './CharacterOptions.js';
import FriendlyParty from './FriendlyParty.js';
import EnemyTeam from './EnemyTeam.js';
import UniqueCharacters from './UniqueCharacters.js';

const App = () => {
  const [characterOptionsArray, setCharacterOptionsArray] =  useState([]);
  const [friendlyParty, setFriendlyParty] = useState([]);
  const [numberOfAllies, setNumberOfAllies] = useState(0);

  return (
    <div>
      <MainContext.Provider value={{ characterOptionsArray, setCharacterOptionsArray,
      friendlyParty, setFriendlyParty,
      numberOfAllies, setNumberOfAllies }}>
      <div className="header" >
        <h1>Encounter Builder</h1>
      </div>
      <div>
        <CharacterOptions />
      </div>
      <div className="teamsContainer">
        <FriendlyParty />
        <EnemyTeam />
      </div>
      </MainContext.Provider>
    </div>
  )
}

export default App;