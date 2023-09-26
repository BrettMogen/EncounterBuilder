import React, { useState, useContext, useEffect } from 'react';

const CharacterModal = ({ character }) => {
  console.log('character in modal', character);

  const { name, inParty, showModal, cssName, cssBorderColor, weapon, health, armour, description, image, baseStats } = character;
  const { strength, dexterity, constitution, intelligence, wisdom, charisma } = baseStats;

  return (
    <div className="characterModalBackground">
      <div className={`${cssName} characterModalContainer`} style={{ cursor: "pointer", border: `1em ridge ${cssBorderColor}` }}>
        <div className="characterModal">
          <div className="characterModalName">{name}</div>
          <div className="characterModalImage" style={{ backgroundImage: `url(${image})`, border: `0.5em ridge ${cssBorderColor}`}}></div>
          <div className="characterModalDescription">{description}</div>
          <div className="characterModalHealth">Health: {health}</div>
          <div className="characterModalArmourClass">AC: {armour}</div>
          <div className="baseStatModal">
            <div className="characterModalStrength">Str: {strength}</div>
            <div className="characterModalDexterity">Dex: {dexterity}</div>
            <div className="characterModalConstitution">Con: {constitution}</div>
            <div className="characterModalIntelligence">Int: {intelligence}</div>
            <div className="characterModalWisdom">Wis: {wisdom}</div>
            <div className="characterModalCharisma">Cha: {charisma}</div>
          </div>
          <div className="characterModalWeapon">Weapon: {weapon}</div>
        </div>
      </div>
    </div>
  )
}

export default CharacterModal;

{/* <div className={`${cssName} characterContainer`} style={{ cursor: "pointer", border: `0.25em ridge ${cssBorderColor}` }}>
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
        </div> */}