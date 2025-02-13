let data = {
    "seasons": [
      {
        "year": 2021,
        "teams": [
          {
            "id": 1,
            "name": "Dream FC",
            "city": "Dreamland",
            "stadium": "Dream Stadium",
            "players": [
              {
                "id": 101,
                "name": "John Doe",
                "position": "Forward",
                "age": 28,
                "statistics": {
                  "matchesPlayed": 30,
                  "goals": 15,
                  "assists": 7,
                  "yellowCards": 3,
                  "redCards": 0,
                  "minutesPlayed": 2700
                }
              },
              {
                "id": 102,
                "name": "Jane Smith",
                "position": "Midfielder",
                "age": 25,
                "statistics": {
                  "matchesPlayed": 28,
                  "goals": 8,
                  "assists": 12,
                  "yellowCards": 5,
                  "redCards": 1,
                  "minutesPlayed": 2500
                }
              }
              // More players...
            ]
          },
          {
            "id": 2,
            "name": "Phoenix United",
            "city": "Phoenix City",
            "stadium": "Phoenix Arena",
            "players": [
              {
                "id": 201,
                "name": "Carlos Ruiz",
                "position": "Defender",
                "age": 30,
                "statistics": {
                  "matchesPlayed": 32,
                  "goals": 2,
                  "assists": 3,
                  "yellowCards": 6,
                  "redCards": 0,
                  "minutesPlayed": 2880
                }
              }
              // More players...
            ]
          }
          // More teams...
        ],
        "matches": [
          {
            "id": 1001,
            "date": "2021-08-15",
            "homeTeamId": 1,
            "awayTeamId": 2,
            "homeGoals": 2,
            "awayGoals": 1,
            "events": [
              {
                "minute": 23,
                "type": "goal",
                "teamId": 1,
                "playerId": 101,
                "assistId": 102
              },
              {
                "minute": 45,
                "type": "yellowCard",
                "teamId": 2,
                "playerId": 201
              },
              {
                "minute": 60,
                "type": "goal",
                "teamId": 2,
                "playerId": 202,
                "assistId": 201
              },
              {
                "minute": 75,
                "type": "goal",
                "teamId": 1,
                "playerId": 103,
                "assistId": 104
              }
              // More events...
            ]
          }
          // More matches...
        ]
      },
      {
        "year": 2022,
        "teams": [
            {
                "name": "per"
            },
            {
                "name": "est"
            }
        ]
      }
      // More seasons...
    ]
  }

  function calculatePlayerEfficiency(data, year) {
    let efficiencyRatings = []
    for (let index in data.seasons ) {
        if ( data.seasons[index].year == year ) {
            let wantedSeason = data.seasons[index]
            for ( let index in wantedSeason.teams) {
                let cuerrentTeam = wantedSeason.teams[index]
                (wantedSeason.teams[index]).forEach(team => {
                    let currentTeamPlayers = team.players
                    for ( let index in currentTeamPlayers ) {
                        (currentTeamPlayers[index]).forEach(player => {
                            let CPD = player.statistics // CPD = CurrentPlayerData
                            let playerEfficiency = (CPD.goals*5 + CPD.assists*3 - CPD.yellowCards - CPD.redCards*3)/CPD.minutesPlayed
                            let playerObj = {}
                            playerObj.name = player.name
                            playerObj.efficiency = playerEfficiency
                            efficiencyRatings.push(playerObj)
                        })
                    }    
                });
            }
        }
    }
    return efficiencyRatings;
  }

  let ratings= calculatePlayerEfficiency(data, 2021);
  console.log(ratings)