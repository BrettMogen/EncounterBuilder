import React, { useState, useContext } from 'react';

const FriendlyParty = () => {
  let friendlyParty = [<div>Hello</div>, <div>Hi there</div>, <div>Howdy</div>, <div>What happens now?</div>, <div>More.</div>, <div>More!</div>, <div>More!!!</div>, <div>EVEN MORE!!!</div>];

  return (
    <div>
      <div className="friendlyPartyContainer">
        <div className="friendlyParty">{friendlyParty}</div>
      </div>
    </div>
  )
}

export default FriendlyParty;