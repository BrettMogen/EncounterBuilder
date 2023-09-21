import React, { useState, useContext } from 'react';
import { MainContext } from '../context.js';
import UniqueCharacters from './UniqueCharacters';

const FriendlyParty = () => {
  const { characterOptionsArray, setCharacterOptionsArray } = useContext(MainContext);
  const { friendlyParty, setFriendlyParty } = useContext(MainContext);
  const { numberOfAllies, setNumberOfAllies } = useContext(MainContext);

  function handleDragOver(e) {
    e.preventDefault();
  }

  const handleOnDrop = (e) => {
    e.preventDefault();
    const characterType = e.dataTransfer.getData('text/plain');
    for (let i = 0; i < characterOptionsArray.length; i++) {
      if (characterOptionsArray[i].props.character.name === characterType) {
        const newCharacter = deepClone(characterOptionsArray[i].props.character);
        newCharacter.id = numberOfAllies;
        newCharacter.inParty = true;
        setNumberOfAllies(numberOfAllies + 1);
        setFriendlyParty([...friendlyParty, <UniqueCharacters character={newCharacter}/>]);
        break;
      }
    }
  }

  function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (Array.isArray(obj)) {
      const arrCopy = [];
      for (let i = 0; i < obj.length; i++) {
        arrCopy[i] = deepClone(obj[i]);
      }
      return arrCopy;
    }
  
    const objCopy = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        objCopy[key] = deepClone(obj[key]);
      }
    }
  
    return objCopy;
  }

  return (
    <div>
      <div onDrop={handleOnDrop} onDragOver={handleDragOver} className="friendlyPartyContainer">
        <div className="friendlyPartyTitle">Friendly Party</div>
        <div className="friendlyParty">{friendlyParty}</div>
      </div>
    </div>
  )
}

export default FriendlyParty;