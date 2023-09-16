import React, { useState, useEffect } from 'react';
// import { MainContext } from '../context.js';
import UniqueCharacters from './UniqueCharacters.js';
import characters from './CharacterArray.js';

const CharacterOptions = () => {
  const [charactersState, setCharactersState] =  useState([]);

  const createCharacters = () => {
    const startingCharacterOptions = characters.map((c) => <UniqueCharacters character={c} />);
    setCharactersState(startingCharacterOptions);
  }

  createCharacters();

  return (
    <div className="characterOptionsContainer">
      <div className="characterOptions">{charactersState}</div>
    </div>
  )
}

export default CharacterOptions;