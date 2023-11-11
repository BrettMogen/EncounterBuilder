import React, { useState, useEffect, useContext } from 'react';
import { MainContext } from '../context.js';
import Typewriter from './Typewriter.js';

const CreateFightListItem = (props) => {

  return (
    <div className="fightListItem">
      <div className="fightListItemLeftColumn">
        <div className="fightListItemArrowIndicator"></div>
      </div>
      <div className="fightListItemMiddleColumn">
        <div className="fightListItemName">
          <Typewriter text={props.character.name} delayTime={130} />
        </div>
      </div>
      <div className="fightListItemRightColumn">
        <div className="fightListItemInitiativeValue"></div>
      </div>
    </div>
  )
}

export default CreateFightListItem;