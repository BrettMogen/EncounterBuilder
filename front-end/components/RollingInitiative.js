import React, { useState, useEffect, useContext } from 'react';
import { MainContext } from '../context.js';

const RollingInitiative = () => {
  const { friendlyParty, setFriendlyParty } = useContext(MainContext);

  useState(() => {
    if (friendlyParty[0].props.character.isRollingInitiative !== true) {
      let newCharacter = friendlyParty[0];
      newCharacter.props.character.isRollingInitiative = true;
      let newFriendlyParty = [...friendlyParty];
      newFriendlyParty[0] = newCharacter;
      setFriendlyParty(newFriendlyParty);
    }
  }, [])



  return (
    <div className="rollingInitiativeContainer">
      <div></div>
    </div>
  )
}

export default RollingInitiative;