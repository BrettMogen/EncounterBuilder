import React, { useState, useEffect, useContext } from 'react';
import { MainContext } from '../context.js';

const RollingInitiative = () => {
  const { friendlyParty, setFriendlyParty, enemyTeam, setEnemyTeam } = useContext(MainContext);

 const [topText, setTopText] = useState(0);

  useEffect(() => {
    const updateCurrentCharacter = function() {
      setTimeout(() => {
        let newTopText = topText + 1;
        setTopText(newTopText);
        console.log('topText', topText);
        updateCurrentCharacter();
      }, 3000);
    }
   updateCurrentCharacter();
  }, []);

  console.log('I rerendered!');
  const generateD20 = function () {
    return Math.floor(20 * Math.random()) + 1;
  }

  return (
    <div className="rollingInitiativeContainer">
      <div className="rollingInitiativeTopText">{topText.toString()}</div>
      <div className="rollingInitiativeDiceDisplay"></div>
      <div className="rollingInitiativeBottomText"></div>
    </div>
  )
}

export default RollingInitiative;