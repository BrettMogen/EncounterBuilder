import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context.js';

const Fight = () => {
  const { modalIsShowing } = useContext(MainContext);
  const { friendlyParty, enemyTeam } = useContext(MainContext);
  const [ charactersAreFighting, setCharactersAreFighting ] = useState(false);

  const startFight = function () {
    ((friendlyParty.length > 0) && (enemyTeam.length > 0)) && setCharactersAreFighting(true);
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
    content =
      <div>
        <div className="fightBackdrop"></div>
      </div>
  }

  return content;

}

export default Fight;