export function checkRowIncrease(growingTeam, stableTeam, numberOfRows, containerRowHeight) {
  growingTeam = growingTeam + 1;

  if (growingTeam <= stableTeam || growingTeam <= 9 || growingTeam - (numberOfRows * 3) <= 0) {
    return ([numberOfRows, 0]);
  }
  
  return ([numberOfRows + 1, containerRowHeight]);
}

export function checkRowDecrease() {

}