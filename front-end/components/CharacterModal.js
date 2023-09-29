import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context.js';

const CharacterModal = ({ character }) => {
  const { name, inFriendlyParty, inEnemyTeam, showModal, cssName, cssBorderColor, weapon, health, armour, description, image, baseStats } = character;
  const { strength, dexterity, constitution, intelligence, wisdom, charisma } = baseStats;

  const { friendlyParty, setFriendlyParty } = useContext(MainContext);
  const { enemyTeam, setEnemyTeam } = useContext(MainContext);

  const showMe = function() {
    console.log('Hello, the close button works!');
  }

  const closeModal = (character) => {
    const newParty = character.inFriendlyParty === true ? [...friendlyParty] : [...enemyTeam];
    const indexToUpdate = newParty.findIndex(index => index.props.character.id === character.id);
    if (indexToUpdate !== -1) {
      newParty[indexToUpdate].props.character.showModal = false;
      character.inFriendlyParty === true ? setFriendlyParty(newParty) : setEnemyTeam(newParty);
    }
  }

  return (
    <div>
      <div className="characterModalBackground">
        <div className={`${cssName} characterModalContainer`} style={{ border: `1em ridge ${cssBorderColor}`, boxShadow: `0 0 1.5em ${cssBorderColor}` }}>
          <div className="characterModal">
            <div className="characterModalCloseButton" onClick={(e) => closeModal(character)}></div>
            <div className="characterModalName">{name}</div>
            <div className="characterModalImageContainer">
              <div className="characterModalImage" style={{ backgroundImage: `url(${image})`, border: `0.5em ridge ${cssBorderColor}` }}></div>
            </div>
            <div className="characterModalDescription customScrollBar">{description}</div>
            <div className="characterModalHealth">Health: {health}</div>
            <div className="characterModalArmourClass">Armour Class: {armour}</div>
            <div className="baseStatModal">
              <div className="characterModalStrength">Strength: {strength}</div>
              <div className="characterModalDexterity">Dexterity: {dexterity}</div>
              <div className="characterModalConstitution">Constitution: {constitution}</div>
              <div className="characterModalIntelligence">Intelligence: {intelligence}</div>
              <div className="characterModalWisdom">Wisdom: {wisdom}</div>
              <div className="characterModalCharisma">Charisma: {charisma}</div>
            </div>
            <div className="characterModalWeapon">Weapon: {weapon}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterModal;

{/* <div className={`${cssName} characterContainer`} style={{ cursor: "pointer", border: `0.25em ridge ${cssBorderColor}` }}>
          <div className="character">
            <div className="characterImage" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="characterName">{name}</div>
            <div className="characterHealth">Health: {health}</div>
            <div className="characterArmourClass">AC: {armour}</div>
            <div className="characterWeapon">Weapon: {weapon}</div>
            <div className="characterStrength baseStat">Str: {strength}</div>
            <div className="characterDexterity baseStat">Dex: {dexterity}</div>
            <div className="characterConstitution baseStat">Con: {constitution}</div>
            <div className="characterIntelligence baseStat">Int: {intelligence}</div>
            <div className="characterWisdom baseStat">Wis: {wisdom}</div>
            <div className="characterCharisma baseStat">Cha: {charisma}</div>
          </div>
        </div> */}