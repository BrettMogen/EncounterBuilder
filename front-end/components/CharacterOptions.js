import React, { useState, useEffect, useContext } from 'react';
import { MainContext } from '../context.js';
import UniqueCharacters from './UniqueCharacters.js';
import characters from './CharacterArray.js';

const CharacterOptions = () => {
  const { characterOptionsArray, setCharacterOptionsArray } = useContext(MainContext);

  const createCharacters = () => {
    const startingCharacterOptions = characters.map((c) => <UniqueCharacters character={c} key={characters.id} />);
    setCharacterOptionsArray(startingCharacterOptions);
  }

  characterOptionsArray.length === 0 && createCharacters();

  return (
      <div className="characterOptionsContainer">
        <div className="characterOptions">{characterOptionsArray}</div>
      </div>
  )
}

export default CharacterOptions;