import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../context.js';

const Fight = () => {
  const { modalIsShowing } = useContext(MainContext);

  let content;
  !modalIsShowing ? content =
    <div>
      <div className="fightButton">Fight!</div>
      <div className="darkenBackground"></div>
    </div> : content = <div></div>

  return content;

}

export default Fight;