import React, { useState, useContext } from 'react';
import { MainContext } from '../context.js';
import UniqueCharacters from './UniqueCharacters';
import DeepClone from './DeepClone.js';
import { checkRowIncrease } from './HandleTeamsContainerHeightAndGrids.js';

const FriendlyParty = () => {
  const { characterOptionsArray, setCharacterOptionsArray } = useContext(MainContext);
  const { friendlyParty, setFriendlyParty } = useContext(MainContext);
  const { enemyTeam, setEnemyTeam } = useContext(MainContext);
  const { numberOfAllies, setNumberOfAllies } = useContext(MainContext);
  const { numberOfRows, setNumberOfRows } = useContext(MainContext);
  const { teamsContainerHeight, setTeamsContainerHeight } = useContext(MainContext);
  const { containerRowHeight, setContainerRowHeight } = useContext(MainContext);

  function handleDragOver(e) {
    e.preventDefault();
  }

  const handleOnDrop = (e) => {
    e.preventDefault();
    //Call the 'checkRowIncrease' function to handle the display of each team (see 'HandleTeamsContainerHeightAndGrid.js')
    const updatedSizing = checkRowIncrease(friendlyParty.length, enemyTeam.length, numberOfRows, containerRowHeight);
    setNumberOfRows(updatedSizing[0]);
    setTeamsContainerHeight(updatedSizing[1] + teamsContainerHeight);
    
    const characterType = e.dataTransfer.getData('text/plain');
    for (let i = 0; i < characterOptionsArray.length; i++) {
      if (characterOptionsArray[i].props.character.name === characterType) {
        const newCharacter = DeepClone(characterOptionsArray[i].props.character);
        newCharacter.id = numberOfAllies;
        newCharacter.inFriendlyParty = true;
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
        <div className="friendlyParty" style={{gridTemplateRows: `repeat(${numberOfRows.toString()}, 1fr)`}}>{friendlyParty}</div>
      </div>
    </div>
  )
}

export default FriendlyParty;