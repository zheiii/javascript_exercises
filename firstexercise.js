let teams = [];

function registerTeam(teamName){
  let team = { name: "", wins: 0, draws: 0, losses: 0, goalsScored: 0, goalsConceded: 0 };
  team.name = teamName;
  teams.push(team);
};

function recordMatchResult(homeTeamName, awayTeamName, homeGoals, awayGoals){
   for ( let team of teams ) {
    if (team.name == homeTeamName){

      team.goalsScored = homeGoals ;
      team.goalsConceded = awayGoals ;

      if ( homeGoals > awayGoals ) {
        team.wins += 1 ;
      } else if ( homeGoals < awayGoals ) {
        team.losses += 1 ;
      } else {
        team.draws += 1 ;
      };

    } else if (team.name == awayTeamName) {

      team.goalsScored = awayGoals ;
      team.goalsConceded = homeGoals ;

      if ( homeGoals < awayGoals ) {
        team.wins += 1 ;
      } else if ( homeGoals > awayGoals ) {
        team.losses += 1 ;
      } else {
        team.draws += 1 ;
      };
      
    };
   };
};

// registerTeam("Dream FC");
// registerTeam("Phoenix United");
// recordMatchResult("Dream FC", "Phoenix United", 3, 1);
// console.log(teams);
