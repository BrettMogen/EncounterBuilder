import React, { useState, useEffect } from 'react';
import MainContext from '../context.js';

const UniqueCharacters = ({ character }) => {
  const { name, inParty, cssName, cssBorderColor, weapon, health, armour, image, baseStats } = character;
  const { strength, dexterity, constitution, intelligence, wisdom, charisma } = baseStats;

  const handleDragStart = (e, character) => {
    e.dataTransfer.setData('text/plain', character.name);
  }

  let content;

  inParty ? content =
    <div className={`${cssName} characterContainer`} style={{ border: `0.25em ridge ${cssBorderColor}` }}>
      <div className="moreInfo characterHover">
        <div className="moreInfoText textEnlarge">More Info</div>
      </div>
      <div className="fillerShade characterHover"></div>
      <div className="remove characterHover">
        <div className="removeText textEnlarge">Remove</div>
      </div>
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
    </div> : content =
  <div draggable onDragStart={(e) => handleDragStart(e, character)} className={`${cssName} characterContainer`} style={{ border: `0.25em ridge ${cssBorderColor}` }}>
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

  return content;
}



export default UniqueCharacters;

