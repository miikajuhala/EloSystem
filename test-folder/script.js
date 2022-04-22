const {runningIndex, runningIndexWithSpeed, chess, runnerElo, teamVersusElo} = require("elosystems")

console.log(runningIndex(100, 30))

console.log(runningIndexWithSpeed(100, 20,4))

console.log(runnerElo(70, 1, 90, 5))


console.log(chess(1810, 1750,3,20))

console.log(teamVersusElo(700, true,800, 800))