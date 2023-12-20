import React, { useState, useEffect, useContext, useRef } from 'react';
import { MainContext } from '../context.js';

const RollingInitiative = () => {
  const { friendlyParty, enemyTeam } = useContext(MainContext);

  const [topText, setTopText] = useState(''); //reset to ''
  const [displayedDie, setDisplayedDie] = useState(''); // reset to ''
  const [bottomText, setBottomText] = useState(''); //reset to ''

  //helper function to generate new D20 rolls
  const generateD20 = () => Math.floor(20 * Math.random()) + 1;
  
  //control dice entering and leaving, then handle bottom text entering as well as all sections leaving(final stage for each character)
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
      const finalInitiative = currentRoll + currentCharacter.props.character.initiative;
      const aOrAn = 'a';
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
  const updateNextCharacter = function (currentCharacter) {
    setTopText(<div className="topTextEnters">{currentCharacter.props.character.name} is rolling initiative...</div>);
    setBottomText(<div></div>);
    setTimeout(() => {
      startRolling(currentCharacter, 0);
    }, 1500);

  }

  //runs once on initial render to begin cycling through each character and sending them to updateNextCharacter. After parties are exhausted, do something else
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
