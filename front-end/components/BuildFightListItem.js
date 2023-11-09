import React, {useState, useEffect, useContext} from 'react';
import { MainContext } from '../context.js';

const BuildFightListItem = (props) => {
  const { friendlyParty, setFriendlyParty } = useContext(MainContext);
  const { enemyTeam, setEnemyTeam } = useContext(MainContext);

  console.log('friendlyParty', friendlyParty);

  return (
    <div>hello</div>
  )
}

export default BuildFightListItem;