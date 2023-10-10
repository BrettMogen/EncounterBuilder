import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context.js';
import DisplayActionsBonusActionsReactionsAndFeatures from './DisplayActionsBonusActionsReactionsAndFeatures.js';

const CharacterModal = ({ character }) => {
  const { name, inFriendlyParty, inEnemyTeam, showModal, cssName, cssBorderColor, health, armour, initiative, description, image, baseStats } = character;
  const { strength, dexterity, constitution, intelligence, wisdom, charisma } = baseStats;

  const { friendlyParty, setFriendlyParty } = useContext(MainContext);
  const { enemyTeam, setEnemyTeam } = useContext(MainContext);

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
            <div className={`characterModalDescription customScrollBar ${cssName + 'Scroll'}`}>{description}</div>
            <div className="characterModalPrimaryStatsContainer">
              <div className="characterModalHealth modalPrimaryStat">Health: {health}</div>
              <div className="characterModalArmourClass modalPrimaryStat">Armour Class: {armour}</div>
              <div className="characterModalInitiative modalPrimaryStat">{initiative >= 0 ? <div>Initiative: +{initiative}</div> : <div>Initiative: -{initiative}</div>}</div>
            </div>
            <div className="characterModalBaseStatContainer">
              <div className="characterModalStrength modalBaseStat">Strength: {strength}</div>
              <div className="characterModalDexterity modalBaseStat">Dexterity: {dexterity}</div>
              <div className="characterModalConstitution modalBaseStat">Constitution: {constitution}</div>
              <div className="characterModalIntelligence modalBaseStat">Intelligence: {intelligence}</div>
              <div className="characterModalWisdom modalBaseStat">Wisdom: {wisdom}</div>
              <div className="characterModalCharisma modalBaseStat">Charisma: {charisma}</div>
            </div>
            <div className={`characterModalActionsAndBonusActions customScrollBar ${cssName + 'Scroll'}`}><DisplayActionsBonusActionsReactionsAndFeatures character={character}/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterModal;