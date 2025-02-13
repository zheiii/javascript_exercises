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
              "id": 3,
            "name": "per",
            "city": "tehran",
            "stadium": "azadi",
            "players": [
              {
                "id": 201,
                "name": "ali alipour",
                "position": "Forward",
                "age": 29,
                "statistics": {
                  "matchesPlayed": 19,
                  "goals": 7,
                  "assists": 0,
                  "yellowCards": 0,
                  "redCards": 0,
                  "minutesPlayed": 1710
                }
              },
              {
                "id": 202,
                "name": "souroush rafiei",
                "position": "Midfielder",
                "age": 34,
                "statistics": {
                  "matchesPlayed": 17,
                  "goals": 2,
                  "assists": 0,
                  "yellowCards": 0,
                  "redCards": 1,
                  "minutesPlayed": 1530
                }
              }
              // More players...
            ]
            },
            {
              "id": 4,
            "name": "esteghlal",
            "city": "tehran",
            "stadium": "azadi",
            "players": [
              {
                "id": 401,
                "name": "ramin rezaeian",
                "position": "defender",
                "age": 34,
                "statistics": {
                  "matchesPlayed": 17,
                  "goals": 6,
                  "assists": 0,
                  "yellowCards": 0,
                  "redCards": 0,
                  "minutesPlayed": 1530
                }
              },
              {
                "id": 102,
                "name": "mehrdad mohammadi",
                "position": "forward",
                "age": 31,
                "statistics": {
                  "matchesPlayed": 5,
                  "goals": 1,
                  "assists": 1,
                  "yellowCards": 0,
                  "redCards": 0,
                  "minutesPlayed": 450
                }
              }
              // More players...
            ]
            }
        ]
      }
      // More seasons...
    ]
  }

  function calculatePlayerEfficiency(data, WantedSeasonYear) {
    efficiencyRating = []

    for ( let season of data.seasons ) {
      if ( season.year == WantedSeasonYear ) {
        let currentTeams = season.teams
        for ( let team of currentTeams ) {
          let currentPlayers = team.players
          for ( let player of currentPlayers ) {
            let currentStatistics = player.statistics
            efficiency = (currentStatistics.goals*5 + currentStatistics.assists*2 - currentStatistics.yellowCards - currentStatistics.redCards*3)/currentStatistics.minutesPlayed
            efficiencyRating.push({"player":player.name, "efficiency":efficiency})
          }
        }
      }
    }

    efficiencyRating.sort((a, b) => a.efficiency > b.efficiency ? 1 : a.efficiency < b.efficiency ? -1 : 0 )
    efficiencyRating.reverse()

    return efficiencyRating
  }

  // console.log(calculatePlayerEfficiency(data, 2022))
 