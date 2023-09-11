import React, { useState, useContext } from 'react';

const EnemyTeam = () => {
  let enemyTeam = [<div></div>];
  return (
    <div>
      <div className="enemyTeamContainer">
        <div className="enemyTeamTitle">Enemy Team</div>
        <div className="enemyTeam">{enemyTeam}</div>
      </div>
   </div>
  )
}

export default EnemyTeam;