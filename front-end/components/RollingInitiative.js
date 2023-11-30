import React, { useState, useEffect, useContext, useRef } from 'react';
import { MainContext } from '../context.js';

const RollingInitiative = () => {
  const { friendlyParty, setFriendlyParty, enemyTeam, setEnemyTeam } = useContext(MainContext);

  const [currentList, setCurrentList] = useState(friendlyParty);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [listIndex, setListIndex] = useState(0);
  const [topText, setTopText] = useState('');
  const [displayedDie, setDisplayedDie] = useState('');
  const [bottomText, setBottomText] = useState('');
  
  const startRolling = function(rollCounter){
    const currentRoll = generateD20();
    console.log('rollCounter', rollCounter);
    rollCounter = rollCounter + 1;
    setDisplayedDie(<div className={`D20-${currentRoll} enterDie`}></div>);

    if (rollCounter < 5) {
      setTimeout(() => {
        setDisplayedDie(<div className={`D20-${currentRoll} exitDie`}></div>);
      }, 500);
      setTimeout(() => {
        startRolling(rollCounter);
      }, 750);
    } else if (rollCounter >= 5) {
      const finalInitiative = currentRoll + currentList[currentIndex].props.character.initiative;
      setTimeout(() => {
        setBottomText(<div>{currentList[currentIndex].props.character.name} rolled a {currentRoll} + {currentList[currentIndex].props.character.initiative} for a total of {finalInitiative}</div>);
      }, 500);
      setTimeout(() => {
        setDisplayedDie(<div className={`D20-${currentRoll} exitDie`}></div>);
      }, 3000);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if (prevIndex < currentList.length) {
          // Display information from the current list
          setTopText(<div className="topTextEnters">{currentList[prevIndex].props.character.name} is rolling initiative...</div>);
          setTimeout(() => {
            startRolling(0);
          }, 1000);
          console.log('Displaying information for:', currentList[prevIndex].props.character.name);
        } else {
          // Switch to the next list or perform a different action
          if (currentList === friendlyParty && nextIndex === currentList.length) {
            setCurrentList(enemyTeam);
            setListIndex((prevListIndex) => prevListIndex + 1);
          } else if (currentList === enemyTeam && nextIndex === currentList.length) {
            clearInterval(intervalId); // Stop the interval
            console.log('Both lists are exhausted. Do something else.');
          }
        }

        return nextIndex % currentList.length; // Reset to 0 at the end of the list
      });
    }, 12000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentList, friendlyParty, enemyTeam, listIndex]);

  const generateD20 = () => {
    return Math.floor(20 * Math.random()) + 1;
  };

  return (
    <div className="rollingInitiativeContainer">
      <div className="rollingInitiativeTopText">{topText}</div>
      <div className="rollingInitiativeDiceDisplay">{displayedDie}</div>
      <div className="rollingInitiativeBottomText">{bottomText}</div>
    </div>
  );
};

export default RollingInitiative;