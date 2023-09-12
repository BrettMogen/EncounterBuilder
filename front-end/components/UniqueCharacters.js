import React, { useState, useEffect } from 'react';
import MainContext from '../context.js';
import CharacterOptions from './CharacterOptions.js';

const UniqueCharacters = (input) => {


  return (
    <div className="characterContainer">
      <div className="characterName">{input['name']}</div>
      <div className="characterWeapon">{input['weapon']}</div>
      <div className="characterHealth">Health: {input['health']}</div>
    </div>
  )
}

export default UniqueCharacters;