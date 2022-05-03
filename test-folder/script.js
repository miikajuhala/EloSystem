const {runningIndex, runningIndexWithSpeed, chess, runnerElo, teamVersusElo} = require("elosystems")

// This is a testing file, in your project use require as shown or import from modules

// attributes: players elo, distance in KM
// console.log("RUNNING",runningIndex(100, 22.2))

// attributes: players elo, distance in KM, min/km speed
// console.log(runningIndexWithSpeed(100, 20,4))

// attributes: players current elo, placement, AvgElo,amountOfParticipants
// console.log(runnerElo(70, 1, 90, 5))

// attributes: player1 elo, player2 elo, winner "1" or "2",K as a how harsh the system is opt: 20,40,60 
console.log(chess(1100, 1200,2,20))

// attributes: playerElo, playerWon true/false, playersTeamAvgElo, enemyTeamAvgElo
// console.log(teamVersusElo(700, true,800, 900))

// console.log(100 + -2)