import React, { useState, useEffect, useContext, useRef } from 'react';
import { MainContext } from '../context.js';
import DeepClone from './DeepClone.js';

const RollingInitiative = () => {
  const { friendlyParty, setFriendlyParty } = useContext(MainContext);
  const { enemyTeam, setEnemyTeam } = useContext(MainContext);

  const [topText, setTopText] = useState(''); //reset to ''
  const [displayedDie, setDisplayedDie] = useState(''); // reset to ''
  const [bottomText, setBottomText] = useState(''); //reset to ''

  //helper function to generate new D20 rolls
  const generateD20 = () => Math.floor(20 * Math.random()) + 1;

  //control dice entering and leaving, then handle bottom text entering as well as all sections leaving(final stage for each character)
  const startRolling = (index, currentParty, rollCounter) => {
    const currentCharacter = currentParty[index];
    const currentRoll = generateD20();

    setDisplayedDie(<div className={`D20-${currentRoll} enterDie`}></div>);

    if (rollCounter < 3) {
      const newRollCounter = rollCounter + 1;

      setTimeout(() => {
        setDisplayedDie(<div className={`D20-${currentRoll} exitDie`}></div>);
      }, 750);

      setTimeout(() => {
        startRolling(index, currentParty, newRollCounter);
      }, 1000);
    } else {
      const finalInitiative = currentRoll + currentCharacter.props.character.initiative;
      let aOrAn = 'a';
      if (currentRoll === 8 || currentRoll === 11 || currentRoll === 18) {
        aOrAn = 'an';
      }

      //reveal the bottom text after the last dice roll has been made and calculate the final roll total
      setTimeout(() => {
        setBottomText(<div className="bottomTextEnters">{currentCharacter.props.character.name} rolled {aOrAn} {currentRoll} + {currentCharacter.props.character.initiative} for a total of {finalInitiative}</div>);
      }, 2000);

      //all three portions fade out in unison 
      setTimeout(() => {
        setTopText(<div className="topTextExits">{currentCharacter.props.character.name} is rolling initiative...</div>);
        setDisplayedDie(<div className={`D20-${currentRoll} exitDieFinal`}></div>);
        setBottomText(<div className="bottomTextExits">{currentCharacter.props.character.name} rolled {aOrAn} {currentRoll} + {currentCharacter.props.character.initiative} for a total of {finalInitiative}</div>);
        //after all three portions fade out, set those states to be empty just to make sure the display is completely clean before the next character is displayed
        setTimeout(() => {
          setTopText(<div></div>);
          setDisplayedDie(<div></div>);
          setBottomText(<div></div>);
        }, 1000);
      }, 5000);
    }
  };

  //top text enters, and startRolling is called to begin dice being displayed for that character
  const updateNextCharacter = function (index, currentParty) {
    const currentCharacter = currentParty[index];
    setTopText(<div className="topTextEnters">{currentCharacter.props.character.name} is rolling initiative...</div>);

    let clonedCharacter = DeepClone(currentParty[index]);
    let clonedParty = DeepClone(currentParty);
    clonedCharacter.props.character.isRollingInitiative = true;
    clonedParty[index] = clonedCharacter;
    if (currentParty === friendlyParty) {
      setFriendlyParty(clonedParty);
    } else {
      setEnemyTeam(clonedParty);
    }

    setBottomText(<div></div>);
    setTimeout(() => {
      startRolling(index, currentParty, 0);
    }, 1500);

  }

  //runs once on initial render to begin cycling through each character and sending them to updateNextCharacter. After parties are exhausted, do something else
  useEffect(() => {
    let index = 0;
    let currentParty = friendlyParty;

    const cycleThroughBothParties = function () {
      if (currentParty === friendlyParty) {
        updateNextCharacter(index, friendlyParty);
      } else {
        updateNextCharacter(index, enemyTeam);
      }

      setTimeout(() => {
        if (index < currentParty.length - 1) {
          index++;
          cycleThroughBothParties();
        } else if (index === currentParty.length - 1) {
          if (currentParty === friendlyParty) {
            index = 0;
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
