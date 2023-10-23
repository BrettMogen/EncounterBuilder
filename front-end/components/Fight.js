import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context.js';

const Fight = () => {
  const { modalIsShowing } = useContext(MainContext);
  const { friendlyParty, enemyTeam } = useContext(MainContext);

  const testFunction = function() {
    console.log('friendlyParty', friendlyParty);
    console.log('enemyTeam', enemyTeam);
  }
  let content;
  !modalIsShowing ? content =
    <div>
      <div className="fightButton" onClick={(testFunction)}>Fight!</div>
      <div className="darkenBackground"></div>
    </div> : content = <div></div>

  return content;

}

export default Fight;