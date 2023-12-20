import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context.js';
import Typewriter from './Typewriter.js';
import CreateFightListItem from './CreateFightListItem.js';
import RollingInitiative from './RollingInitiative.js';

const FightModal = (props) => {
  const updateCharactersAreFighting = props.updateCharactersAreFighting;

  const [fightStage, setFightStage] = useState({ stage: 'introduction', part: 1 });
  const [fightListBackgroundsVisibility, setFightListBackgroundsVisibility] = useState('invisible');
  const { friendlyParty, setFriendlyParty } = useContext(MainContext);
  const { enemyTeam, setEnemyTeam } = useContext(MainContext);
  const { originalFriendlyParty, originalEnemyTeam } = useContext(MainContext);

  const closeFightModal = function () {

    setFriendlyParty(originalFriendlyParty);
    setEnemyTeam(originalEnemyTeam);
    updateCharactersAreFighting(false);
  }

  useEffect(() => {
    const stages = [
      { part: 1, delay: 1000 }, //final product should be set to delay: 5000
      { part: 2, delay: 1000 }, //final product should be set to delay: 5000
      { part: 3, delay: 1000 },  // set to 6000
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
        const stages = [
          { part: 4, delay: 1000 }, //set to 10,000
          { part: 5, delay: 1500 },
          { part: 6, delay: 0 },
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
              tempFriendlyList.push(<CreateFightListItem key={index} characterTeamIndex={[friendlyParty, index]} />);
            }

            if (index < enemyTeam.length) {
              tempEnemyList.push(<CreateFightListItem key={index} characterTeamIndex={[enemyTeam, index]} />);
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
  }, [fightStage]);

  const startInitiativeStage = function () {
    setFightStage({ stage: 'initiative', part: 0 });
  }

  useEffect(() => {
    if (fightStage.stage === 'initiative' && fightStage.part === 0) {
      const stages = [
        { part: 1, delay: 2000 },
        { part: 2, delay: 3500 },
        { part: 3, delay: 1500 },
        { part: 4, delay: 1000 },
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
    }
  }, [fightStage]);

  return (
    <div>
      <div className="fightModalContainer">
        <div className="fightModal">
          {/* Introduction Stage */}
          <div className="fightIntroduction">
            {(fightStage.stage === 'introduction' && fightStage.part === 1) && <div className="introductionPart1 mushroomBackground">
              <Typewriter text='Welcome to the fight simulator!' />
            </div>}
            {(fightStage.stage === 'introduction' && fightStage.part === 2) && <div className="introductionPart2 mushroomBackground">
              <Typewriter text="Here are the current teams you've created." />
            </div>}
            {((fightStage.stage === 'introduction' && fightStage.part !== 1 && fightStage.part !== 2) || fightStage.stage === 'initiative') && <div className="introductionPart3 mushroomBackground">
              <div className="fightListContainer">
                {fightListBackgroundsVisibility === 'visible' && <div className="fightListBackgroundDarken"></div>}
                {fightListBackgroundsVisibility === 'visible' && <div className="friendlyFightListBackground"></div>}
                <div className="fightListContent">
                  {friendlyList}
                </div>
              </div>
              {(fightStage.stage === 'introduction' && fightStage.part === 3) && <div className="centralFightListTextPart3">Here are the current teams you've created.
              </div>}
              {(fightStage.stage === 'introduction' && (fightStage.part === 4 || fightStage.part === 5 || fightStage.part === 6)) && <div className="centralFightListTextPart4">
                {fightStage.part === 4 && <Typewriter text="This is your last chance to edit your choices before combat begins." />}
                {fightStage.part === 5 && <div className="centralFightTextFadeOut">This is your last chance to edit your choices before combat begins.</div>}
                {fightStage.part === 6 && <div className="beginFightOrMakeEditsContainer">
                  <div className="letsBeginButton" onClick={startInitiativeStage}>Let's Begin</div>
                  <div className="makeFurtherEditsButton" onClick={closeFightModal}>Make Further Edits...</div>
                </div>}
              </div>}
              {/* Initiative Stage */}
              {fightStage.stage === 'initiative' && <div className="initiativeContainer">
                {fightStage.part === 1 && <div className="beginFightOrMakeEditsContainerFadeOut">
                  <div className="letsBeginButtonNoTransition">Let's Begin</div>
                  <div className="makeFurtherEditsButtonNoTransition">Make Further Edits...</div>
                </div>}
                {fightStage.part === 2 && <Typewriter text="Let's roll initiative for both teams." />}
                {fightStage.part === 3 && <div className="rollInitiativeFadeOut">Let's roll initiative for both teams.</div>}
                {fightStage.part === 4 && <RollingInitiative />}
              </div>}
              <div className="fightListContainer">
                {fightListBackgroundsVisibility === 'visible' && <div className="fightListBackgroundDarken"></div>}
                {fightListBackgroundsVisibility === 'visible' && <div className="enemyFightListBackgroundImage"></div>}
                <div className="fightListContent">
                  {enemyList}
                </div>
              </div>
            </div>}
          </div>
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
