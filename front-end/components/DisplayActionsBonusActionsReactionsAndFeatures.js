import React, { useState, useContext, useEffect } from 'react';
import CharacterModal from './CharacterModal.js';

const DisplayActionsBonusActionsReactionsAndFeatures = ({ character }) => {
  const { cssName, spellSlots, kiPoints, actions, bonusActions, reactions, other } = character;

  const displayKiPoints = function () {
    return (
      <div>
        <div className="aBAROrOTitle">Available Ki Points</div>
        <div>Ki points: {kiPoints}</div>
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
      <div>
        <div className="aBAROrOTitle">Available Spell Slots</div>
        <div>{spellSlotsList}</div>
      </div>
    )
  }

  const displayABAROrO = function () {
    const actionsList = [];
    const bonusActionsList = [];
    const reactionsList = [];
    const otherList = [];

    const lists = [[actions, actionsList], [bonusActions, bonusActionsList], [reactions, reactionsList], [other, otherList]];

    //Loop through actions, bonus actions, reactions, and other and display their contents
    for (let i = 0; i < lists.length; i++) {
      for (let j = 0; j < lists[i][0].length; j++) {
        lists[i][1].push(
          <div className="aBAROrO">
            <div className="aBAROrOName">{lists[i][0][j].name}</div>
            <div className="aBAROrODescription">{lists[i][0][j].description}</div>
          </div>
        )
      }
    }

    return (
      <div>
        {actions.length > 0 &&
          <div>
            <div className="aBAROrOTitle">Actions</div>
            <div>{actionsList}</div>
          </div>}
          {bonusActions.length > 0 &&
          <div>
            <div className="aBAROrOTitle">Bonus Actions</div>
            <div>{bonusActionsList}</div>
          </div>}
          {reactions.length > 0 &&
          <div>
            <div className="aBAROrOTitle">Reactions</div>
            <div>{reactionsList}</div>
          </div>}
          {other.length > 0 &&
          <div>
            <div className="aBAROrOTitle">Other</div>
            <div>{otherList}</div>
          </div>}
      </div>
    )
  }

  return (
    <div className="displayContainer">
      {kiPoints !== undefined && <div>{displayKiPoints()}</div>}
      {spellSlots.length > 0 && <div>{displaySpellSlots()}</div>}
      <div>{displayABAROrO()}</div>
    </div>
  )
}

export default DisplayActionsBonusActionsReactionsAndFeatures;