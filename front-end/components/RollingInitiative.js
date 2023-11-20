import React, { useState, useEffect, useContext } from 'react';
import { MainContext } from '../context.js';

const RollingInitiative = () => {
  const { friendlyParty, setFriendlyParty, enemyTeam, setEnemyTeam } = useContext(MainContext);

  // useState(() => {
  //   if (friendlyParty[0].props.character.isRollingInitiative !== true) {
  //     let newCharacter = friendlyParty[0];
  //     newCharacter.props.character.isRollingInitiative = true;
  //     let newFriendlyParty = [...friendlyParty];
  //     newFriendlyParty[0] = newCharacter;
  //     setFriendlyParty(newFriendlyParty);
  //   }
  // }, []);

  // const [testImage, setTestImage] = useState('1');

  // const changeImage = function () {
  //   if (testImage === '20') {
  //     setTestImage('1');
  //   } else {
  //     let newTestImage = Number(testImage) + 1;
  //     newTestImage = newTestImage.toString();
  //     setTestImage(newTestImage);
  //   }
  // }

  const [characterRollingInitiative, setCharacterRollingInitiative] = useState(friendlyParty[0]);
  const [currentDie, setCurrentDie] = useState();

  useEffect(() => {
    let friendlyCounter = 0;
    let enemyCounter = 0;
    setTimeout(() => {
      setCharacterRollingInitiative(friendlyParty[friendlyCounter]);
      friendlyCounter++;

      if (friendlyCounter > friendlyParty.length) {
        setCharacterRollingInitiative(enemyTeam[enemyCounter]);
        enemyCounter++;
      }
    }, 3000);
  });

  let topText = '';

  useEffect(() => {
    topText = <div className="currentTopText">{characterRollingInitiative.name} is rolling...</div>
  }, [characterRollingInitiative])

  const generateD20 = function() {
    return Math.floor(20 * Math.random()) + 1;
  }

  return (
    <div className="rollingInitiativeContainer">
      <div className="rollingInitiativeTopText">{topText}</div>
      <div className="rollingInitiativeDiceDisplay"></div>
      <div className="rollingInitiativeBottomText"></div>
      {/* <div className={`testImage D20-${testImage}`}></div>
      <div className="testButtonToChangeImage" onClick={changeImage}>Switch</div> */}
    </div>
  )
}

export default RollingInitiative;