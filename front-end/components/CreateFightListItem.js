import React, { useState, useEffect, useContext } from 'react';
import { MainContext } from '../context.js';
import Typewriter from './Typewriter.js';

const CreateFightListItem = ({ characterTeamIndex }) => {
  const { friendlyParty, enemyTeam } = useContext(MainContext);
  const [currentCharacter, setCurrentCharacter] = useState(friendlyParty[characterTeamIndex[1]]);

  useEffect(() => {
    if (characterTeamIndex[0] === enemyTeam) {
      setCurrentCharacter(enemyTeam[characterTeamIndex[1]]);
    }
  }, []);

  useEffect(() => {
    setCurrentCharacter(characterTeamIndex[0][characterTeamIndex[1]]);
  }, [friendlyParty, enemyTeam]);

  return (
    <div className="fightListItem">
      <div className="fightListItemLeftColumn">
      {(currentCharacter.props.character.isRollingInitiative === true) && <div className="fightListItemArrowIndicator"></div>}
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