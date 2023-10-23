import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context.js';
import Typewriter from './Typewriter.js';

const FightModal = () => {
  const [fightStage, setFightStage] = useState('introduction');

  return (
    <div>
      <div className='fightModalContainer'>
        <div className='fightModal'>
          {fightStage === 'introduction' && <div className='fightIntroduction'><Typewriter text='Welcome to the fight simulator!' /></div>}
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