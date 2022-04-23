# EloSystem
elo system for chess, two team multiplayer games and running competitions.

usage:

import { runningIndex, teamVersusElo } from "elosystems";

OR

const {runningIndex, teamVersusElo} = require("elosystems")



let runningIndex = runningIndex(playersElo,  distanceInKm))

// attributes: players elo, distance in KM, min/km speed
runningIndexWithSpeed(100, 20,4)

// attributes: players current elo, placement, AvgElo,amountOfParticipants
runnerElo(70, 1, 90, 5)

// attributes: player1 elo, player2 elo, winner "1" or "2",K as a how harsh the system is opt: 20,40,60 
chess(1810, 1750,3,20)

// attributes: playerElo, playerWon true/false, playersTeamAvgElo, enemyTeamAvgElo
teamVersusElo(700, true,800, 800))
