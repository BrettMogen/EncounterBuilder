import React, { useState, useEffect } from 'react';
import MainContext from '../context.js';
import CharacterOptions from './CharacterOptions.js';

const UniqueCharacters = ({character}) => {
  const { name, weapon, health, armour, image } = character;

  return (
    <div className="characterContainer">
      <div className="characterImage" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="characterName">{name}</div>
      <div className="characterWeapon">Weapon: {weapon}</div>
      <div className="characterHealth">Health: {health}</div>
      <div className="characterArmourClass">Armour Class: {armour}</div>
    </div>
  )
}

export default UniqueCharacters;