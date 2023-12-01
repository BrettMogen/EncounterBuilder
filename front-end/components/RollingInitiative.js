import React, { useState, useEffect, useContext } from 'react';
import { MainContext } from '../context.js';

const RollingInitiative = () => {
  const { friendlyParty, enemyTeam } = useContext(MainContext);

  const [currentList, setCurrentList] = useState(friendlyParty);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topText, setTopText] = useState('');
  const [displayedDie, setDisplayedDie] = useState('');
  const [bottomText, setBottomText] = useState('');

  const generateD20 = () => Math.floor(20 * Math.random()) + 1;

  const startRolling = (index, rollCounter) => {
    const currentRoll = generateD20();
    console.log('Rolling for index', index);

    setDisplayedDie(<div className={`D20-${currentRoll} enterDie`}></div>);
    

   

    if (rollCounter < 3) {
      const newRollCounter = rollCounter + 1;

      setTimeout(() => {
        setDisplayedDie(<div className={`D20-${currentRoll} exitDie`}></div>);
      }, 750);
     
      setTimeout(() => {
        startRolling(index, newRollCounter);
      }, 1000);
    } else {
      setTimeout(() => {
        const finalInitiative = currentRoll + currentList[index].props.character.initiative;
        setBottomText(<div>{currentList[index].props.character.name} rolled a {currentRoll} + {currentList[index].props.character.initiative} for a total of {finalInitiative}</div>);
      }, 2000);
    }
  };

  useEffect(() => {
    setTopText(<div className="topTextEnters">{currentList[currentIndex].props.character.name} is rolling initiative...</div>);
    setBottomText(<div></div>);
    startRolling(currentIndex, 0);
  }, [currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex < currentList.length - 1) {
          return prevIndex + 1;
        } else {
          if (currentList === friendlyParty) {
            setCurrentList(enemyTeam);
          } else if (currentList === enemyTeam) {
            clearInterval(intervalId);
            console.log('Both lists are exhausted. Do something else.');
          }
          return 0;
        }
      });
    }, 12000);

    return () => clearInterval(intervalId);
  }, [currentList, friendlyParty, enemyTeam]);

  return (
    <div className="rollingInitiativeContainer">
      <div className="rollingInitiativeTopText">{topText}</div>
      <div className="rollingInitiativeDiceDisplay">{displayedDie}</div>
      <div className="rollingInitiativeBottomText">{bottomText}</div>
    </div>
  );
};

export default RollingInitiative;
