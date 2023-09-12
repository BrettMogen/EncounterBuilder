import React, { useState, useEffect } from 'react';
import MainContext from '../context.js';
import CharacterOptions from './CharacterOptions.js';

const UniqueCharacters = (input) => {


  return (
    <div>
      <div>{input['name']}</div>
      <div>{input['weapon']}</div>
      <div>{input['health']}</div>
    </div>
  )
}

export default UniqueCharacters;