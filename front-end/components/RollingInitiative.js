import React, { useState, useEffect, useContext, useRef } from 'react';
import { MainContext } from '../context.js';

const RollingInitiative = () => {
  const { friendlyParty, enemyTeam } = useContext(MainContext);

  const [topText, setTopText] = useState(''); //reset to ''
  const [displayedDie, setDisplayedDie] = useState(''); // reset to ''
  const [bottomText, setBottomText] = useState(''); //reset to ''


  const generateD20 = () => Math.floor(20 * Math.random()) + 1;

  const startRolling = (currentCharacter, rollCounter) => {
    const currentRoll = generateD20();

    setDisplayedDie(<div className={`D20-${currentRoll} enterDie`}></div>);

    if (rollCounter < 3) {
      const newRollCounter = rollCounter + 1;

      setTimeout(() => {
        setDisplayedDie(<div className={`D20-${currentRoll} exitDie`}></div>);
      }, 750);

      setTimeout(() => {
        startRolling(currentCharacter, newRollCounter);
      }, 1000);
    } else {
      setTimeout(() => {
        const finalInitiative = currentRoll + currentCharacter.props.character.initiative;
        setBottomText(<div>{currentCharacter.props.character.name} rolled a {currentRoll} + {currentCharacter.props.character.initiative} for a total of {finalInitiative}</div>);
      }, 2000);
    }
  };

  const updateNextCharacter = function (currentCharacter) {
    setTopText(<div className="topTextEnters">{currentCharacter.props.character.name} is rolling initiative...</div>);
    setBottomText(<div></div>);
    startRolling(currentCharacter, 0);
  }

  useEffect(() => {
    let counter = 0;
    let currentParty = friendlyParty;

    const cycleThroughBothParties = function () {
      updateNextCharacter(currentParty[counter]);

      setTimeout(() => {
        if (counter < currentParty.length - 1) {
          counter++;
          cycleThroughBothParties();
        } else if (counter === currentParty.length - 1) {
          if (currentParty === friendlyParty) {
            counter = 0;
            currentParty = enemyTeam;
            cycleThroughBothParties();
          } else {
            console.log('Both parties are exhausted.');
          }
        }
      }, 12000);
    };

    cycleThroughBothParties();
  }, []);

  return (
    <div className="rollingInitiativeContainer">
      <div className="rollingInitiativeTopText">{topText}</div>
      <div className="rollingInitiativeDiceDisplay">{displayedDie}</div>
      <div className="rollingInitiativeBottomText">{bottomText}</div>
    </div>
  );
};

export default RollingInitiative;
