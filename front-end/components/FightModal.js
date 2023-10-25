import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context.js';
import Typewriter from './Typewriter.js';

const FightModal = () => {
  const [fightStage, setFightStage] = useState({ stage: 'introduction', part: 1 });
  const { friendlyParty } = useContext(MainContext);
  const { enemyTeam } = useContext(MainContext);

  useEffect(() => {
    const stages = [
      { part: 1, delay: 1000 },
      { part: 2, delay: 1000 },
      { part: 3, delay: 6000 },
    ];

    let counter = 0;

    const updateFightStage = () => {
      if (counter < stages.length) {
        const stage = stages[counter];
        setFightStage({ ...fightStage, part: stage.part });
        counter++;

        const delay = stage.delay;
        setTimeout(updateFightStage, delay);
      }
    };

    updateFightStage();
  }, []);

  const [friendlyList, setFriendlyList] = useState([]);

  useEffect(() => {

    if (fightStage.stage === 'introduction' && fightStage.part === 3) {
      let index = 0;
      const tempList = [];

      const startPushing = function () {
        setTimeout(() => {
          if (index < friendlyParty.length) {
            tempList.push(
              <div key={index}>
                <Typewriter text={friendlyParty[index].props.character.name} />
              </div>);
          }

          index++;
          setFriendlyList([...tempList]);
          startPushing();
        }, 500);
      }
      startPushing();
    }
  }, [fightStage])

  return (
    <div>
      <div className="fightModalContainer">
        <div className="fightModal">
          {/* Introduction Stage */}
          {fightStage.stage === 'introduction' &&
            <div className="fightIntroduction">
              {fightStage.part === 1 && <div className="introductionPart1">
                <Typewriter text='Welcome to the fight simulator!' />
              </div>}
              {fightStage.part === 2 && <div className="introductionPart2">
                <Typewriter text="Here are the current teams you've created." />
              </div>}
              {fightStage.part === 3 && <div className="introductionPart3">
                <div className="friendlyFightList">
                  {friendlyList}
                </div>
                <div className="centralFightListText">Here are the current teams you've created.</div>
                <div className="enemyFightList">Some text</div>
              </div>}
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