let teams = [];

function registerTeam(teamName){
  let team = { name: "", wins: 0, draws: 0, losses: 0, goalsScored: 0, goalsConceded: 0 };
  team.name = teamName;
  teams.push(team);
};

function recordMatchResult(homeTeamName, awayTeamName, homeGoals, awayGoals){
  team[homeTeamName].goalsScored = homeGoals ;
  team[homeTeamName].goalsConceded = awayGoals ;

  if ( homeGoals > awayGoals ) {
    teams[homeTeamName].wins += 1 ;
  } else if (awayGoals > homeGoals) {
    teams[awayTeamName].wins += 1 ;
  } else {
    teams[homeTeamName].draws += 1
    teams[awayTeamName].draws += 1
  }
}

// TODO - Create the function here, get the teamName as argument and initialise the remaining properties to default values as shown in the output example below.

// Example usage:
registerTeam("Dream FC");
registerTeam("Phoenix United");
recordMatchResult("Dream FC", "Phoenix United", 3, 1);

console.log(teams);
// [
//   { name: 'Dream FC', wins: 0, draws: 0, losses: 0, goalsScored: 0, goalsConceded: 0 },
//   { name: 'Phoenix United', wins: 0, draws: 0, losses: 0, goalsScored: 0, goalsConceded: 0 }
// ]