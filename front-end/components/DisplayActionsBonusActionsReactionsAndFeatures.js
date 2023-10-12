import React, { useState, useContext, useEffect } from 'react';
import CharacterModal from './CharacterModal.js';

const DisplayActionsBonusActionsReactionsAndFeatures = ({ character }) => {
  const { cssName, spellSlots, kiPoints, actions, bonusActions, reactions, other } = character;

  const displayKiPoints = function () {
    return (
      <div className="displayKiPoints">
        <div className="kiPointsTitle displayTitle">Available Ki Points: {kiPoints}</div>
      </div>
    )
  }

  const displaySpellSlots = function () {
    const indexToStringArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    let spellSlotsList = [];

    for (let i = 0; i < spellSlots.length; i++) {
      if (spellSlots[i] > 0) {
        spellSlotsList.push(<div className="spellSlot">Lvl. {indexToStringArray[i]}: {spellSlots[i].toString()}</div>);
      }
    }

    return (
      <div className="displaySpellSlots">
        <div className="spellSlotsTitle displayTitle">Available Spell Slots</div>
        <div className="spellSlotsList">{spellSlotsList}</div>
      </div>
    )
  }

  const displayActions = function () {
    let actionsList = [];

    for (let i = 0; i < actions.length; i++) {
      actionsList.push(
        <div className="action aBAOrR">
          <div className="actionName aBAOrRName">{actions[i].name}</div>
          <div className="actionDescription aBAOrRDescription">{actions[i].description}</div>
        </div>
      )
    }

    return (
      <div className="displayActions aBAOrRContainer">
        <div className="actionsTitle displayTitle">Actions</div>
        <div className="actionsList aBAOrRList">{actionsList}</div>
      </div>
    )
  }

  const displayBonusActions = function () {
    let bonusActionsList = [];

    for (let i = 0; i < bonusActions.length; i++) {
      bonusActionsList.push(
        <div className="bonusAction aBAOrR">
          <div className="bonusActionName aBAOrRName">{bonusActions[i].name}</div>
          <div className="bonusActionDescription aBAOrRDescription">{bonusActions[i].description}</div>
        </div>
      )
    }

    return (
      <div className="displayBonusActions aBAOrRContainer">
        <div className="bonusActionsTitle displayTitle">Bonus Actions</div>
        <div className="bonusActionsList aBAOrRList">{bonusActionsList}</div>
      </div>
    )
  }

  return (
    <div className="displayContainer">
      {kiPoints !== undefined && <div>{displayKiPoints()}</div>}
      {spellSlots.length > 0 && <div>{displaySpellSlots()}</div>}
      <div>{displayActions()}</div>
      <div>{displayBonusActions()}</div>
    </div>
  )
}

export default DisplayActionsBonusActionsReactionsAndFeatures;