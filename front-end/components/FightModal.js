import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context.js';
import Typewriter from './Typewriter.js';
import timeout from './Timeout.js';

const FightModal = () => {
  const [fightStage, setFightStage] = useState({stage: 'introduction', part: 0});

  useEffect(() => {
    timeout(setFightStage({...fightStage, part: 1}), 4000);
  })

  return (
    <div>
      <div className="fightModalContainer">
        <div className="fightModal">
          {/* Introduction Stage */}
          {fightStage.stage === 'introduction' &&
            <div className="fightIntroduction">
              {fightStage.part === 0 &&  <div className="introductionPart0">
                <Typewriter text='Welcome to the fight simulator!' />
              </div>}
              {fightStage.part === 1 && <Typewriter text="Here are the current teams you've created." />}
            </div>}
        </div>
      </div>
      <div className="fightBackdrop"></div>
    </div>
  )
}

export default FightModal;

{/* <div className='textDisplayFightSection'></div>
          <div className='fightModalGridContainer'>
            <div className='friendlyFightSection fightModalGridSection'></div>
            <div className='diceRollFightSection fightModalGridSection'></div>
            <div className='enemyFightSection fightModalGridSection'></div>
          </div> */}