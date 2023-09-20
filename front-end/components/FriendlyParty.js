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
    const characterType = e.dataTransfer.getData('text/plain');
    for (let i = 0; i < characterOptionsArray.length; i++) {
      if (characterOptionsArray[i].props.character.name === characterType) {
        newCharacter = characterOptionsArray[i].props.character;
        newCharacter.id = numberOfAllies;
        newCharacter.inParty = true;
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