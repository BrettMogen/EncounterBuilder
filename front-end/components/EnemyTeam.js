import React, { useState, useContext } from 'react';
import { MainContext } from '../context.js';
import UniqueCharacters from './UniqueCharacters';
import DeepClone from './DeepClone.js';
import { checkRowIncrease } from './HandleTeamsContainerHeightAndGrids.js';

const EnemyTeam = () => {
  const { characterOptionsArray, setCharacterOptionsArray } = useContext(MainContext);
  const { friendlyParty, setFriendlyParty } = useContext(MainContext);
  const { enemyTeam, setEnemyTeam } = useContext(MainContext);
  const { numberOfEnemies, setNumberOfEnemies} = useContext(MainContext);
  const { numberOfRows, setNumberOfRows } = useContext(MainContext);
  const { teamsContainerHeight, setTeamsContainerHeight } = useContext(MainContext);
  const { containerRowHeight, setContainerRowHeight } = useContext(MainContext);

  function handleDragOver(e) {
    e.preventDefault();
  }

  const handleOnDrop = (e) => {
    e.preventDefault();
     const updatedSizing = checkRowIncrease(enemyTeam.length, friendlyParty.length, numberOfRows, containerRowHeight);
    //return and set numberOfRows and teamsContainerHeight
    setNumberOfRows(updatedSizing[0]);
    setTeamsContainerHeight(updatedSizing[1] + teamsContainerHeight);
    const characterType = e.dataTransfer.getData('text/plain');
    for (let i = 0; i < characterOptionsArray.length; i++) {
      if (characterOptionsArray[i].props.character.name === characterType) {
        const newCharacter = DeepClone(characterOptionsArray[i].props.character);
        newCharacter.id = numberOfEnemies;
        newCharacter.inEnemyTeam = true;
        setNumberOfEnemies(numberOfEnemies + 1);
        setEnemyTeam([...enemyTeam, <UniqueCharacters character={newCharacter}/>]);
        break;
      }
    }
  }
  
  return (
    <div>
      <div onDrop={handleOnDrop} onDragOver={handleDragOver} className="enemyTeamContainer">
        <div className="enemyTeamTitle">Enemy Team</div>
        <div className="enemyTeam" style={{gridTemplateRows: `repeat(${numberOfRows.toString()}, 1fr)`}}>{enemyTeam}</div>
      </div>
   </div>
  )
}

export default EnemyTeam;