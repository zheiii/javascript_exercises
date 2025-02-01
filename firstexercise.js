let teams = [
  // {
  //   name: 'Team 1',
  //   wins: 1,
  //   draws: 1,
  //   losses: 1,
  //   goalsScored: 2
  // },
  // {
  //   name: 'Team 2',
  //   wins: 0,
  //   draws: 0,
  //   losses: 2,
  //   goalsScored: 1
  // },
  // {
  //   name: 'Team 3',
  //   wins: 0,
  //   draws: 2,
  //   losses: 0,
  //   goalsScored: 1
  // },
  // {
  //   name: 'Team 4',
  //   wins: 2,
  //   draws: 1,
  //   losses: 0,
  //   goalsScored: 5
  // } *
];

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

// const stats = calculateLeagueStats(); *
// console.log(stats); *

// *** for checking the code, un-tag the tags with an "*" at the end :). ***
