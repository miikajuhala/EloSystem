# EloSystem
elo system for any two-team multiplayer game (CSGO etc), chess and running competitions.

# Installation:
### `npm install elosystems`
for expo:
### `expo install elosystems`
:+1::+1::+1::+1:
-----------------------------------------------------
# usage:

### `import { runningIndex, teamVersusElo, chess } from "elosystems";`

OR

### `const {runningIndex, teamVersusElo, chess} = require("elosystems")`

-------------------------------------------------------

## 1. Team-versus-team elo calculation:
### ***Each player must be looped trough this function individually***

### `teamVersusElo(currentPlayerElo, playerWon, playersTeamAvgElo, enemyTeamAvgElo))`

#### Example:
 `const updatedElo = teamVersusElo(700, true, 750, 700))`
returns: `735.5`, as the new elo for the individual player



## 2. Chess:
### `chess(player1Elo, player2Elo, winner(1,2,(3 as draw)), K-factor)`

#### Example:
`const newRatings = chess(1810, 1750, 1, 20)`

returns:
`Object {
		p1: 1821.7099735734362, 
		p2: 1738.2900264265638, 
 		rating: 11.70997357343619,
  	expectedValue: 0.4145013213281905
 }`
## 3. Running competition system:
***Recommended elo starting value is 100***
### 3.1 Competitors elo calculation

### `runnerElo(playerCurrentElo,  placement, avgEloOfCompetition, amountOfParticipants)`

#### Example: 
`runnerElo(70, 1, 90, 5)`, returns: `78`, as the new elo for current individual player


 ### 3.2 Running (by distance) index calculation during competition: 
 ***Index means points in this case, for example more points equals better position in the competition**
### `runningIndex(playerElo, distanceInKm)`

### Example
`const playerPoints = runningIndex(100, 30)`
returns: `20`, as the points for current individual player

### 3.3 Running with speed factor index calculation during competition: 
 ***Index means points in this case, for example more points equals better position in the competition**
### `runningIndexWithSpeed(playerElo, distanceInKm, runningPace (min/km)>`

### Example
`const playerPoints = runningIndex(100, 20, 6)`
returns: `5`, as the points for current individual player


