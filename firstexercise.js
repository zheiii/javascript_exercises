let teams = [];
function registerTeam(teamName){
  let team = { name: "", wins: 0, draws: 0, losses: 0, goalsScored: 0, goalsConceded: 0 };
  team.name = teamName;
  teams.push(team);
};

// TODO - Create the function here, get the teamName as argument and initialise the remaining properties to default values as shown in the output example below.

// Example usage:
registerTeam("Dream FC");
registerTeam("Phoenix United");
console.log(teams);
// [
//   { name: 'Dream FC', wins: 0, draws: 0, losses: 0, goalsScored: 0, goalsConceded: 0 },
//   { name: 'Phoenix United', wins: 0, draws: 0, losses: 0, goalsScored: 0, goalsConceded: 0 }
// ]