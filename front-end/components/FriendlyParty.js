import React, { useState, useContext } from 'react';

const FriendlyParty = () => {
  let friendlyParty = [<div style={{height: "1000px"}}>Hello</div>, <div>Hi there</div>, <div>Howdy</div>, <div>What happens now?</div>];

  return (
    <div>
      <div className="friendlyPartyContainer">
        <div className="friendlyParty">{friendlyParty}</div>
      </div>
    </div>
  )
}

export default FriendlyParty;