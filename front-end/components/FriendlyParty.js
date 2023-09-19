import React, { useState, useContext } from 'react';
import { MainContext } from '../context.js';
import UniqueCharacters from './UniqueCharacters';

const FriendlyParty = () => {
  const { characterOptionsArray, setCharacterOptionsArray } = useContext(MainContext);

  const [friendlyParty, setFriendlyParty] = useState([]);
  const [numberOfAllies, setNumberOfAllies] = useState(0);

  function handleDragOver(e) {
    e.preventDefault();
  }

  const handleOnDrop = (e) => {
    e.preventDefault();
    let newCharacter;
    const characterID = e.dataTransfer.getData('text/plain');
    console.log('characterID', characterID);
    for (let i = 0; i < characterOptionsArray.length; i++) {
      if (characterOptionsArray[i].props.character.id === characterID) {
        newCharacter = characterOptionsArray[i].props.character;
        console.log('newCharacter', newCharacter);
        newCharacter.id = numberOfAllies + 1;
        setNumberOfAllies(numberOfAllies + 1);
        setFriendlyParty([...friendlyParty, <UniqueCharacters character={newCharacter}/>]);
        break;
      }
    }
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