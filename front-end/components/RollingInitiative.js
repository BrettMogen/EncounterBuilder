import React, { useState, useEffect, useContext, useRef } from 'react';
import { MainContext } from '../context.js';

const RollingInitiative = () => {
  const { friendlyParty, enemyTeam } = useContext(MainContext);

  const [currentList, setCurrentList] = useState(friendlyParty);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topText, setTopText] = useState(''); //reset to ''
  const [displayedDie, setDisplayedDie] = useState(''); // reset to ''
  const [bottomText, setBottomText] = useState(''); //reset to ''


  const currentIndexRef = useRef(currentIndex);
  const currentListRef = useRef(currentList);

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
    console.log('currentIndex in first useEffect: ', currentIndex);
    if (currentIndex < currentList.length) {
      setTopText(<div className="topTextEnters">{currentList[currentIndex].props.character.name} is rolling initiative...</div>);
      setBottomText(<div></div>);
      startRolling(currentIndex, 0);
    }
  }, [currentIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        console.log('Im in the main useEffect and the prevIndex is: ', prevIndex);
        console.log('The currentIndex is: ', currentIndex);
        if (prevIndex < currentListRef.current.length - 1) {
          return prevIndex + 1;
        } else {
          if (currentListRef.current === friendlyParty) {
            currentListRef.current = enemyTeam;
            return 0;
          } else if (currentListRef.current === enemyTeam) {
            clearInterval(intervalId);
            console.log('Both lists are exhausted. Do something else.');
          }
        }
      });
    }, 12000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
    currentListRef.current = currentList;
  }, [currentIndex, currentList]);


  return (
    <div className="rollingInitiativeContainer">
      <div className="rollingInitiativeTopText">{topText}</div>
      <div className="rollingInitiativeDiceDisplay">{displayedDie}</div>
      <div className="rollingInitiativeBottomText">{bottomText}</div>
    </div>
  );
};

export default RollingInitiative;
