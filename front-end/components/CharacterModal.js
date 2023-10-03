import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context.js';

const CharacterModal = ({ character }) => {
  const { name, inFriendlyParty, inEnemyTeam, showModal, cssName, cssBorderColor, weapon, health, armour, description, image, baseStats, actions, bonusActions } = character;
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

  const formatActionsAndBonusActions = function () {
    const actionsList = actions.map((input) => {
      if (input.type === 'attack') {
        return (
          <div>
            <div>{input.name}: +{input.hitChance} to hit, {input.damage.numberOfDice}d{input.damage.kindOfDice} + {input.damage.baseDamage} damage</div>
          </div>
        )
      }
    });

    const bonusActionsList = bonusActions.map((input) => {
      if (input.type === 'attack') {
        return (
          <div>
            <div>{input.name}: +{input.hitChance} to hit, {input.damage.numberOfDice}d{input.damage.kindOfDice} + {input.damage.baseDamage} damage</div>
          </div>
        )
      }
    });

    return (
      <div>
        <div className="actionsTitle">Actions</div>
        <div>{actionsList}</div>
        <div className="bonusActionsTitle">Bonus Actions</div>
        <div>{bonusActionsList}</div>
      </div>
    );
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
            <div className="characterModalActionsAndBonusActions">{formatActionsAndBonusActions()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterModal;