import React, { useState, useEffect, useContext } from 'react';
import { MainContext } from '../context.js';
import CharacterModal from './CharacterModal.js';
import { checkRowDecrease } from './HandleTeamsContainerHeightAndGrids.js';

const UniqueCharacters = ({ character }) => {
  const { name, inFriendlyParty, inEnemyTeam, showModal, cssName, cssBorderColor, health, armour, initiative, image, baseStats } = character;
  const { strength, dexterity, constitution, intelligence, wisdom, charisma } = baseStats;

  const { friendlyParty, setFriendlyParty } = useContext(MainContext);
  const { enemyTeam, setEnemyTeam } = useContext(MainContext);
  const { numberOfAllies, setNumberOfAllies } = useContext(MainContext);
  const { numberOfEnemies, setNumberOfEnemies } = useContext(MainContext);
  const { setModalIsShowing } = useContext(MainContext);
  const { numberOfRows, setNumberOfRows } = useContext(MainContext);
  const { teamsContainerHeight, setTeamsContainerHeight } = useContext(MainContext);
  const { containerRowHeight } = useContext(MainContext);

  const handleDragStart = (e, character) => {
    e.dataTransfer.setData('text/plain', character.name);
  }

  const removeCharacter = (character) => {
    //Call the 'checkRowDecrease' function to handle the display of each team (see 'HandleTeamsContainerHeightAndGrid.js')
    const updatedSizing = character.inFriendlyParty === true ? checkRowDecrease(friendlyParty.length, enemyTeam.length, numberOfRows, containerRowHeight) : checkRowDecrease(enemyTeam.length, friendlyParty.length, numberOfRows, containerRowHeight);
    setNumberOfRows(updatedSizing[0]);
    setTeamsContainerHeight(teamsContainerHeight - updatedSizing[1]);
    
    let newParty = [];

    const whichSide = character.inFriendlyParty === true ? friendlyParty : enemyTeam;
    const sideCount = character.inFriendlyParty === true ? numberOfAllies : numberOfEnemies;
    const setSideCount = character.inFriendlyParty === true ? setNumberOfAllies : setNumberOfEnemies;

    setSideCount(sideCount - 1);

    for (let i = 0; i < whichSide.length; i++) {
      if (character.id > whichSide[i].props.character.id) {
        newParty.push(whichSide[i]);
      } else if (character.id < whichSide[i].props.character.id) {
        const updatedCharacter = whichSide[i];
        updatedCharacter.props.character.id =  updatedCharacter.props.character.id - 1;
        newParty.push(updatedCharacter);
      }
    }
    character.inFriendlyParty === true ? setFriendlyParty(newParty) : setEnemyTeam(newParty);
  }

  const unhideCharacterModal = (character) => {
    setModalIsShowing(true);
    const newParty = character.inFriendlyParty === true ? [...friendlyParty] : [...enemyTeam];
    const indexToUpdate = newParty.findIndex(index => index.props.character.id === character.id);
    if (indexToUpdate !== -1) {
      newParty[indexToUpdate].props.character.showModal = true;
      character.inFriendlyParty === true ? setFriendlyParty(newParty) : setEnemyTeam(newParty);
    }
  }

  let content;

  inFriendlyParty || inEnemyTeam ? content =
    <div className={`${cssName} characterContainer`} style={{ border: `0.25em ridge ${cssBorderColor}` }}>
      {/* Conditionally render either the characterModal or the show modal and remove hover options. 
      This was done to eliminate any interactivity with these options while the modal is open. */}
      {showModal ? <CharacterModal character={character} /> : <div>
        <div className="moreInfo characterHover">
          <div onClick={(e) => unhideCharacterModal(character)} className="moreInfoText textEnlarge">More Info</div>
        </div>
        <div className="fillerShade characterHover"></div>
        <div className="remove characterHover">
          <div onClick={(e) => removeCharacter(character)} className="removeText textEnlarge">Remove</div>
        </div>
      </div>}
      <div className="character">
        <div className="characterImage" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="characterName">{name}</div>
        <div className="characterHealth">Health: {health}</div>
        <div className="characterArmourClass">AC: {armour}</div>
        <div className="characterInitiative">Initiative: {initiative}</div>
        <div className="characterStrength baseStat">Str: {strength}</div>
        <div className="characterDexterity baseStat">Dex: {dexterity}</div>
        <div className="characterConstitution baseStat">Con: {constitution}</div>
        <div className="characterIntelligence baseStat">Int: {intelligence}</div>
        <div className="characterWisdom baseStat">Wis: {wisdom}</div>
        <div className="characterCharisma baseStat">Cha: {charisma}</div>
      </div>
    </div> : content =
  <div draggable onDragStart={(e) => handleDragStart(e, character)} className={`${cssName} characterContainer`} style={{ cursor: "pointer", border: `0.25em ridge ${cssBorderColor}` }}>
    <div className="character">
      <div className="characterImage" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="characterName">{name}</div>
      <div className="characterHealth">Health: {health}</div>
      <div className="characterArmourClass">AC: {armour}</div>
      <div className="characterInitiative">Initiative: {initiative}</div>
      <div className="characterStrength baseStat">Str: {strength}</div>
      <div className="characterDexterity baseStat">Dex: {dexterity}</div>
      <div className="characterConstitution baseStat">Con: {constitution}</div>
      <div className="characterIntelligence baseStat">Int: {intelligence}</div>
      <div className="characterWisdom baseStat">Wis: {wisdom}</div>
      <div className="characterCharisma baseStat">Cha: {charisma}</div>
    </div>
  </div>

  return content;
}



export default UniqueCharacters;

