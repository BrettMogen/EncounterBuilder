import React, { useState, useEffect, useContext } from 'react';
import { MainContext } from '../context.js';
import Typewriter from './Typewriter.js';

const CreateFightListItem = ({ characterTeamIndex }) => {
  const { friendlyParty, enemyTeam } = useContext(MainContext);
  const [currentCharacter, setCurrentCharacter] = useState(friendlyParty[characterTeamIndex[1]]);
  const { initiativeSelector } = useContext(MainContext);
  const [characterIsRollingInitiative, setCharacterIsRollingInitiative] = useState(undefined);

  useEffect(() => {
    if (characterTeamIndex[0] === friendlyParty) {
      setCharacterIsRollingInitiative(initiativeSelector[characterTeamIndex[1]]);
    } else if (characterTeamIndex[0] === enemyTeam) {
      setCharacterIsRollingInitiative(initiativeSelector[friendlyParty.length + characterTeamIndex[1]]);
    }
  }, [initiativeSelector]);

  useEffect(() => {
    if (characterTeamIndex[0] === enemyTeam) {
      setCurrentCharacter(enemyTeam[characterTeamIndex[1]]);
    }
  }, []);

  return (
    <div className="fightListItem">
      <div className="fightListItemLeftColumn">
      {characterIsRollingInitiative && <div className="fightListItemArrowIndicator"></div>}
      </div>
      <div className="fightListItemMiddleColumn">
        <div className="fightListItemName">
          <Typewriter text={currentCharacter.props.character.name} delayTime={130} />
        </div>
      </div>
      <div className="fightListItemRightColumn">
        <div className="fightListItemInitiativeValue"></div>
      </div>
    </div>
  )
}

export default CreateFightListItem;