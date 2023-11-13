import React, { useState, useEffect, useContext } from 'react';
import { MainContext } from '../context.js';
import Typewriter from './Typewriter.js';

const CreateFightListItem = ({ characterTeamIndex }) => {
  const {friendlyParty, enemyTeam} = useContext(MainContext);

  const character = characterTeamIndex[0][characterTeamIndex[1]].props.character;


  return (
    <div className="fightListItem">
      <div className="fightListItemLeftColumn">
        {(character.isRollingInitiative === true) && <div className="fightListItemArrowIndicator"></div>}
      </div>
      <div className="fightListItemMiddleColumn">
        <div className="fightListItemName">
          <Typewriter text={character.name} delayTime={130} />
        </div>
      </div>
      <div className="fightListItemRightColumn">
        <div className="fightListItemInitiativeValue"></div>
      </div>
    </div>
  )
}

export default CreateFightListItem;