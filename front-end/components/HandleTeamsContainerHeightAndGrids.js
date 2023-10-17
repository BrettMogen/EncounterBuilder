//These functions affect the height of the teamsContainer (which is used to display the friendlyParty and the enemyTeam).
//The functions allow for the teamsContainer to increase or decrease in height depending on how many characters are on each side.
//These functions also change the amount of rows in each grid so that characters remain roughly the same height no matter how many are added to each side.

export function checkRowIncrease(growingTeam, stableTeam, numberOfRows, containerRowHeight) {
  growingTeam = growingTeam + 1;

  if (growingTeam <= stableTeam || growingTeam <= 9 || growingTeam - (numberOfRows * 3) <= 0) {
    return ([numberOfRows, 0]);
  }

  return ([numberOfRows + 1, containerRowHeight]);
}

export function checkRowDecrease(shrinkingTeam, stableTeam, numberOfRows, containerRowHeight) {
  if (shrinkingTeam <= stableTeam || shrinkingTeam <= 9 || (shrinkingTeam - 1) - ((numberOfRows - 1) * 3) > 0) {
    return ([numberOfRows, 0]);
  }

  return ([numberOfRows - 1, containerRowHeight]);
}