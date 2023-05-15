import React, { useState, useEffect } from 'react';
import { MainContext } from '../context.js';
import Axios from 'axios';
import FriendlyParty from './FriendlyParty.js';
import EnemyTeam from './EnemyTeam.js';

const App = () => {

  return (
    <div>
      <div>Hello World!</div>
      <div className="teamsContainer">
        <FriendlyParty />
        <EnemyTeam />
      </div>
    </div>
  )
}

export default App;