import React, { useState, useEffeect } from 'react';
import { MainContext } from '../context.js';
import UniqueCharacters from './UniqueCharacters.js';

const CharacterOptions = () => {
  let characterBank = [];

  const characters = [
    {
      name: 'Archer',
      weapon: 'Bow',
      health: 12
    },
    {
      name: 'Barbarian',
      weapon: 'Great Axe',
      health: 20
    }
  ];

  let i = 0;

  while (i < characters.length) {
    characterBank.push(UniqueCharacters(characters[i]));
    i++;
  }

  return (
    <div className = "characterOptionsContainer">
      <div className="characterOptions">{characterBank}</div>
      <div className="characterOptionsTitle">Character Options</div>
    </div>
  )
}

export default CharacterOptions;