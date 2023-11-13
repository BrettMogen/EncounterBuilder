import React, { useState, useEffect, useContext } from 'react';
import { MainContext } from '../context.js';

const RollingInitiative = () => {
  const { friendlyParty, setFriendlyParty } = useContext(MainContext);

  useState(() => {
    if (friendlyParty[0].props.character.isRollingInitiative !== true) {
      let newCharacter = friendlyParty[0];
      newCharacter.props.character.isRollingInitiative = true;
      let newFriendlyParty = [...friendlyParty];
      newFriendlyParty[0] = newCharacter;
      setFriendlyParty(newFriendlyParty);
    }
  }, []);

  const [testImage, setTestImage] = useState('1');

  const changeImage = function () {
    if (testImage === '20') {
      setTestImage('1');
    } else {
      let newTestImage = Number(testImage) + 1;
      newTestImage = newTestImage.toString();
      setTestImage(newTestImage);
    }
  }

  return (
    <div className="rollingInitiativeContainer">
      <div className={`testImage D20-${testImage}`}></div>
      <div className="testButtonToChangeImage" onClick={changeImage}>Switch</div>
    </div>
  )
}

export default RollingInitiative;