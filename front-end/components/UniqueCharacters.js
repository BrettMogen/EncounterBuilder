import React, { useState, useEffect } from 'react';
import MainContext from '../context.js';
import CharacterOptions from './CharacterOptions.js';

const UniqueCharacters = ({character}) => {
  const { name, weapon, health } = character;

//{character}:props    to destructure incoming props
  return (
    <div className="characterContainer">
      <div className="characterName">{name}</div>
      <div className="characterWeapon">{weapon}</div>
      <div className="characterHealth">Health: {health}</div>
    </div>
  )
}

export default UniqueCharacters;