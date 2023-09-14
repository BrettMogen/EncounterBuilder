import React, { useState, useEffect } from 'react';
import { MainContext } from '../context.js';
import UniqueCharacters from './UniqueCharacters.js';
import characters from './CharacterArray.js';

const CharacterOptions = () => {

  return (
    <div className="characterOptionsContainer">
      <div className="characterOptions">{characters.map((c) => <UniqueCharacters character={c} />)}</div>
    </div>
  )
}

export default CharacterOptions;