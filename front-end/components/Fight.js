import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context.js';
import FightModal from './FightModal.js';

const Fight = () => {
  const { modalIsShowing } = useContext(MainContext);
  const { friendlyParty, enemyTeam } = useContext(MainContext);
  const [charactersAreFighting, setCharactersAreFighting] = useState(false);

  const startFight = function () {
    // ((friendlyParty.length > 0) && (enemyTeam.length > 0)) && setCharactersAreFighting(true);
    //Temporarily commenting out while editing CSS
    setCharactersAreFighting(true);
  }

  const updateCharactersAreFighting = function(value) {
    setCharactersAreFighting(value);
  }

  let content;

  if (modalIsShowing && !charactersAreFighting) {
    content = <div></div>
  } else if (!modalIsShowing && !charactersAreFighting) {
    content =
      <div>
        <div className="fightButton" onClick={(startFight)}>Fight!</div>
        <div className="darkenBackground"></div>
      </div>
  } else {
    content = <FightModal updateCharactersAreFighting={updateCharactersAreFighting}/>
  }

  return content;

}

export default Fight;