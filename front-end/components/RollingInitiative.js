import React, { useState, useEffect, useContext, useRef } from 'react';
import { MainContext } from '../context.js';

const RollingInitiative = () => {
  const { friendlyParty, setFriendlyParty, enemyTeam, setEnemyTeam } = useContext(MainContext);


  const [currentList, setCurrentList] = useState(friendlyParty);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [listIndex, setListIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;

        if ((currentList === enemyTeam) && (nextIndex > currentList.length)) {
          clearInterval(intervalId); // Stop the interval
          console.log('Both lists are exhausted. Do something else.');
        } else if (prevIndex < currentList.length) {
          // Display information from the current list
          console.log('Displaying information for:', currentList[prevIndex].props.character.name);
          if ((currentList === friendlyParty) && (nextIndex === currentList.length)) {
            setCurrentList(enemyTeam);
            setListIndex(listIndex + 1);
          }
        } 

        if ((currentList === enemyTeam) && (nextIndex === currentList.length)) {
          return nextIndex;
        }
        return nextIndex % currentList.length; // Reset to 0 at the end of the list
      });
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentList, friendlyParty, enemyTeam, listIndex]);

  const generateD20 = function () {
    return Math.floor(20 * Math.random()) + 1;
  }

  return (
    <div className="rollingInitiativeContainer">
      <div className="rollingInitiativeTopText"></div>
      <div className="rollingInitiativeDiceDisplay"></div>
      <div className="rollingInitiativeBottomText"></div>
    </div>
  )
}

export default RollingInitiative;