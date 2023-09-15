import React, { useState, useEffect } from 'react';
import MainContext from '../context.js';
import CharacterOptions from './CharacterOptions.js';

const UniqueCharacters = ({ character }) => {
  const { name, cssName, cssBorderColor, weapon, health, armour, image, baseStats } = character;
  const { strength, dexterity, constitution, intelligence, wisdom, charisma } = baseStats;

  return (
    <div className={`${cssName} characterContainer`} style={{ border: `0.25em ridge ${cssBorderColor}`}}>
      <div className="character">
        <div className="characterImage" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="characterName">{name}</div>
        <div className="characterHealth">Health: {health}</div>
        <div className="characterArmourClass">AC: {armour}</div>
        <div className="characterWeapon">Weapon: {weapon}</div>
        <div className="characterStrength baseStat">Str: {strength}</div>
        <div className="characterDexterity baseStat">Dex: {dexterity}</div>
        <div className="characterConstitution baseStat">Con: {constitution}</div>
        <div className="characterIntelligence baseStat">Int: {intelligence}</div>
        <div className="characterWisdom baseStat">Wis: {wisdom}</div>
        <div className="characterCharisma baseStat">Cha: {charisma}</div>
      </div>
    </div>
  )
}

export default UniqueCharacters;