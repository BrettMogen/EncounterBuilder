import React, { useState, useContext, useEffect } from 'react';
import CharacterModal from './CharacterModal.js';

const DisplayActionsBonusActionsReactionsAndFeatures = ({ character }) => {
  const { spellSlots, kiPoints, actions, bonusActions, reactions, other } = character;
  // const formatActionsAndBonusActions = function () {
  //   const actionsList = actions.map((input) => {
  //     if (input.type === 'attack') {
  //       return (
  //         <div>
  //           <div>{input.name}: +{input.hitChance} to hit, {input.damage.numberOfDice}d{input.damage.kindOfDice} + {input.damage.baseDamage} damage</div>
  //         </div>
  //       )
  //     }
  //   });

  //   const bonusActionsList = bonusActions.map((input) => {
  //     if (input.type === 'attack') {
  //       return (
  //         <div>
  //           <div>{input.name}: +{input.hitChance} to hit, {input.damage.numberOfDice}d{input.damage.kindOfDice} + {input.damage.baseDamage} damage</div>
  //         </div>
  //       )
  //     }
  //   });

  //   return (
  //     <div>
  //       <div className="actionsTitle">Actions</div>
  //       <div>{actionsList}</div>
  //       <div className="bonusActionsTitle">Bonus Actions</div>
  //       <div>{bonusActionsList}</div>
  //     </div>
  //   );
  // }

  const displayKiPoints = function () {
    return (
      <div className="displayKiPoints">
        <div className="kiPointsTitle">Available Ki Points: {kiPoints}</div>
      </div>
    )
  }

  const displaySpellSlots = function () {
    const indexToStringArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    let spellSlotList = [];

    for (let i = 0; i < spellSlots.length; i++) {
      if (spellSlots[i] > 0) {
        spellSlotList.push(<div>Lvl. {indexToStringArray[i]}: {spellSlots[i].toString()}</div>);
      }
    }

    return (
      <div className="displaySpellSlots">
        <div className="spellSlotsTitle">Available Spell Slots</div>
        <div>{spellSlotList}</div>
      </div>
    )
  }

  return (
    <div>
      {kiPoints !== undefined && <div>{displayKiPoints()}</div>}
      {spellSlots.length > 0 && <div>{displaySpellSlots()}</div>}
    </div>
  )
}

export default DisplayActionsBonusActionsReactionsAndFeatures;