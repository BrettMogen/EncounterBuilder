import React, { useState, useEffect } from 'react';
import { MainContext } from '../context.js';
import UniqueCharacters from './UniqueCharacters.js';

const CharacterOptions = () => {

  const characters = [
    {
      name: 'Archer',
      weapon: 'Bow',
      health: 12,
      characterDescription: 'This character is sick!!'
    },
    {
      name: 'Barbarian',
      weapon: 'Great Axe',
      health: 20
    }
  ];

  return (
    <div className = "characterOptionsContainer">
      <div className="characterOptions">{characters.map( (c) => <UniqueCharacters character={c}/> )}</div>
      <div className="characterOptionsTitle">Character Options</div>
    </div>
  )
}

export default CharacterOptions;