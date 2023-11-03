import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context.js';
import Typewriter from './Typewriter.js';

const FightModal = (props) => {
  console.log('props', props);
  console.log('props.data', props.data);

  const setCharactersAreFighting = props.data;

  const closeFightModal = function () {
    setCharactersAreFighting(false);
  }

  const [fightStage, setFightStage] = useState({ stage: 'introduction', part: 1 });
  const [fightListBackgroundsVisibility, setFightListBackgroundsVisibility] = useState('invisible');
  const { friendlyParty } = useContext(MainContext);
  const { enemyTeam } = useContext(MainContext);

  useEffect(() => {
    const stages = [
      { part: 1, delay: 5000 }, //final product should be set to delay: 5000
      { part: 2, delay: 5000 }, //final product should be set to delay: 5000
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
  const [enemyList, setEnemyList] = useState([]);

  useEffect(() => {

    if (fightStage.stage === 'introduction' && fightStage.part === 3) {
      let index = 0;
      const tempFriendlyList = [];
      const tempEnemyList = [];

      setTimeout(() => {
        setFightListBackgroundsVisibility('visible');
      }, 2500);

      const largerParty = friendlyParty.length > enemyTeam.length ? friendlyParty.length : enemyTeam.length;
      setTimeout(() => {
        setFightStage({ ...fightStage, part: 4 });
      }, (6000 + (largerParty * 300)));

      setTimeout(() => {
        tempFriendlyList.push(<div className="fightListTeamTitle"><Typewriter text="Friendly Party" /></div>);
        tempEnemyList.push(<div className="fightListTeamTitle"><Typewriter text="Enemy Team" /></div>);
        setFriendlyList([...tempFriendlyList]);
        setEnemyList([...tempEnemyList]);
      }, 500);

      setTimeout(() => {


        const startPushing = function () {
          setTimeout(() => {
            if (index < friendlyParty.length) {
              tempFriendlyList.push(
                <div key={index} className="fightListItem">
                  <Typewriter text={friendlyParty[index].props.character.name} delayTime={130} />
                </div>);
            }

            if (index < enemyTeam.length) {
              tempEnemyList.push(
                <div key={index} className="fightListItem">
                  <Typewriter text={enemyTeam[index].props.character.name} delayTime={130} />
                </div>);
            }

            index++;
            setFriendlyList([...tempFriendlyList]);
            setEnemyList([...tempEnemyList]);
            if (index < friendlyParty.length || index < enemyTeam.length) {
              startPushing();
            }
          }, 300);
        }
        startPushing();
      }, 1000);
    }
  }, [fightStage])

  return (
    <div>
      <div className="fightModalContainer">
        <div className="fightModal">
          {/* Introduction Stage */}
          {fightStage.stage === 'introduction' &&
            <div className="fightIntroduction">
              {fightStage.part === 1 && <div className="introductionPart1 mushroomBackground">
                <Typewriter text='Welcome to the fight simulator!' />
              </div>}
              {fightStage.part === 2 && <div className="introductionPart2 mushroomBackground">
                <Typewriter text="Here are the current teams you've created." />
              </div>}
              {(fightStage.part === 3 || fightStage.part === 4) && <div className="introductionPart3 mushroomBackground">
                <div className="fightListContainer">
                  {fightListBackgroundsVisibility === 'visible' && <div className="fightListBackgroundDarken"></div>}
                  {fightListBackgroundsVisibility === 'visible' && <div className="friendlyFightListBackground"></div>}
                  <div className="fightListContent">
                    {friendlyList}
                  </div>
                </div>
                {fightStage.part === 3 && <div className="centralFightListTextPart3">Here are the current teams you've created.
                  {fightListBackgroundsVisibility === 'visible' && <div><div className="centralTextDarkenedBackgroundPart3"></div><div className="centralTextDarkenedBackgroundPart3Border"></div></div>}
                </div>}
                {fightStage.part === 4 && <div className="centralFightListTextPart4">
                  <Typewriter text="This is your last chance to edit your choices before combat begins." />
                  <div>
                    <div className="centralTextDarkenedBackgroundPart4"></div>
                    <div className="centralTextDarkenedBackgroundPart4Border"></div>
                  </div>
                </div>}
                <div className="fightListContainer">
                  {fightListBackgroundsVisibility === 'visible' && <div className="fightListBackgroundDarken"></div>}
                  {fightListBackgroundsVisibility === 'visible' && <div className="enemyFightListBackgroundImage"></div>}
                  <div className="fightListContent">
                    {enemyList}
                  </div>
                </div>
              </div>}
            </div>}
        </div>
      </div>
      <div className="closeFightModalContainer">
        <div className="closeFightModal" onClick={closeFightModal}>Close</div>
      </div>
      <div className="fightBackdrop"></div>
    </div>
  )
}

export default FightModal;
