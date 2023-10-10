import React, { useState, useContext, useEffect } from 'react';
import CharacterModal from './CharacterModal.js';

const DisplayActionsBonusActionsReactionsAndFeatures = ({ character }) => {
  const { spellSlots, kiPoints, actions, bonusActions, reactions, other } = character;

  const displayKiPoints = function () {
    return (
      <div className="displayKiPoints">
        <div className="kiPointsTitle">Available Ki Points: {kiPoints}</div>
      </div>
    )
  }

  const displaySpellSlots = function () {
    const indexToStringArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    let spellSlotsList = [];

    for (let i = 0; i < spellSlots.length; i++) {
      if (spellSlots[i] > 0) {
        spellSlotsList.push(<div>Lvl. {indexToStringArray[i]}: {spellSlots[i].toString()}</div>);
      }
    }

    return (
      <div className="displaySpellSlots">
        <div className="spellSlotsTitle">Available Spell Slots</div>
        <div className="spellSlotsList">{spellSlotsList}</div>
      </div>
    )
  }

  const displayActions = function () {
    let actionsList = [];

    for (let i = 0; i < actions.length; i++) {
      actionsList.push(
        <div className="action">
          <div className="actionName">{actions[i].name}</div>
          <div className="actionDescription">{actions[i].description}</div>
        </div>
      )
    }

    return (
      <div className="displayActions">
        <div className="actionsTitle">Actions</div>
        <div className="actionsList">{actionsList}</div>
      </div>
    )
  }

  return (
    <div>
      {kiPoints !== undefined && <div>{displayKiPoints()}</div>}
      {spellSlots.length > 0 && <div>{displaySpellSlots()}</div>}
      <div>{displayActions()}</div>
    </div>
  )
}

export default DisplayActionsBonusActionsReactionsAndFeatures;