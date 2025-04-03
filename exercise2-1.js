let teams = [
 { name: 'Team 1', wins: 1, draws: 1, losses: 1, goalsScored: 2, goalsConceded: 1, point: 0, goalDifference: 0 },
 { name: 'Team 2', wins: 0, draws: 0, losses: 2, goalsScored: 0, goalsConceded: 2, point: 0, goalDifference: 0 },
 { name: 'Team 3', wins: 0, draws: 2, losses: 0, goalsScored: 1, goalsConceded: 1, point: 0, goalDifference: 0 },
 { name: 'Team 4', wins: 2, draws: 1, losses: 0, goalsScored: 5, goalsConceded: 1, point: 0, goalDifference: 0 } 
];

function registerTeam(teamName){
  let team = { name: "", wins: 0, draws: 0, losses: 0, goalsScored: 0, goalsConceded: 0, point: 0, goalDifference: 0 };
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

function calculateLeagueStats() {
  let stats = new Object() ;

  stats.totalMatchs = 0 ;
  stats.totalGoals = 0 ;
 
  for ( let team of teams ) {
    stats.totalMatchs += ( team.wins + team.losses + team.draws )/2 ; 
    // this calculates the totalmatchs at any point of the season(like even before all of the matches of a week are done).
    // the "/2" is because each match contains two teams. for example in a league with 16 teams, each week 8 matchs are played.
    stats.totalGoals += team.goalsScored ;
  };

  stats.averageGoalsPerMatch = (stats.totalGoals) / (stats.totalMatchs)

  return stats
};

function calculateTeamPoints() {
  for ( let team of teams ) {
    team.point = team.wins*3 + team.draws*1 
  };
};

function calculateGoalDifference() {
  for ( let team of teams ) {
    team.goalDifference = team.goalsScored-team.goalsConceded
  };
};

function displayStandings() {
  teams.sort((a, b) => a.point > b.point ? 1 : a.point < b.point ? -1 : a.goalDifference > b.goalDifference ? 1 : -1 )
  teams.reverse() 
  console.log("Current League Standings:");
  teams.forEach(team => {
    for ( let [key, value] of Object.entries(team)) {
      console.log(`${key}:${value}`)
    };
  });
};

calculateGoalDifference();
calculateTeamPoints();
displayStandings();


