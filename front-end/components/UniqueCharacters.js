import React, { useState, useEffect } from 'react';
import MainContext from '../context.js';
import CharacterOptions from './CharacterOptions.js';

const UniqueCharacters = (props) => {

   console.log('Props: ', props);
//{character}:props    to destructure incoming props
  return (
    <div className="characterContainer">
      <div className="characterName">{props.character.name}</div>
      <div className="characterWeapon">{props.character.weapon}</div>
      <div className="characterHealth">Health: {props.character.health}</div>
    </div>
  )
}

export default UniqueCharacters;