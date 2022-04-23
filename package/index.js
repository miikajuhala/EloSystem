
// online team versus team elo system such as used in csgo, lol etc, inspired by chess maths
function teamVersusElo(playerElo, playerWon, playersTeamAvgElo, enemyTeamAvgElo){

    let elo;
    
    const diff = Math.abs(playersTeamAvgElo- enemyTeamAvgElo);
    const takeoff = (diff/400)
    const exp =(1+ Math.pow(10, takeoff)) 
    const expected = 1/exp
    let rating = 60 * (1-expected)
    
    if(playerWon && playerElo>playersTeamAvgElo){
        elo = playerElo + rating
    }
    else if(playerWon && playerElo<=playersTeamAvgElo){
        elo = playerElo + rating + (expected*3)
        
    }
    else if(!playerWon && playerElo>playersTeamAvgElo){
        elo = playerElo - rating - (expected*3)
    }
    else if(!playerWon && playerElo<=playersTeamAvgElo){
        elo = playerElo - rating
    }
   
    
    return elo;
    
    }


// chess single game elo system including draws
function chess(p1, p2, winner, K){

    if(K===null){K=20} 

    const diff = Math.abs(p1 - p2);
    const takeoff = (diff/400)
    const exp =(1+ Math.pow(10, takeoff)) 
    const expected = 1/exp
    let rating = K * (1-expected)
    
    if(winner===1){
        p1 =p1 + rating;
        p2 = p2 - rating
    }
    else if(winner===2){
        p1 = p1-rating
        p2 = p2+rating
    }
    else if(p1>p2){
        rating= K*(0.5-expected)
        p1 = p1-rating
        p2 = p2+rating
    }

    return({p1, p2, rating: rating, expectedValue:expected})
}


// ELO SYSTEM FOR (SPORTS/RUNNING-APPLICATION) TO SORT AND EVALUATE PLAYERS DURING AND AFTER COMPETITIONS

const defaultElo = 100;

function runningIndex(elo, distance) {
    if (elo===null) elo = defaultElo;
    const equation = distance * (elo/10) 
    return distance - (equation * elo/100)/distance
}

function runningIndexWithSpeed(elo, distance, minPerKm) {
    if (elo===null) elo = defaultElo;
    const equation = distance * (elo/10) 
    return 3 * ((distance - (equation * elo/100)/distance ) / minPerKm)
}

// kisan jälkeen päivitettävä ongelmana jos monta kisaa missä samat juoksut
function runnerElo(oldElo, placement, eloAvg, amountOfParticipants) {
    let elo;
    let first = 5;
    let secThird = 2.5
    let rest = 5

    if(eloAvg===null){eloAvg=100}

    if(amountOfParticipants<=3) {
        first = 2.5
        secThird = 1.5
    }
    
    if(placement===1 && eloAvg>oldElo){
        elo = oldElo + first +3
    }
    else if(placement===1 && eloAvg<=oldElo){
        elo = oldElo + first
    }

    else if(placement>1 && placement<=3){
        if(eloAvg>oldElo){
            elo = oldElo - secThird
        }else{
            elo = oldElo - (secThird+2.5)
        }
        
    }else{
        if(eloAvg>oldElo){
            elo = oldElo - rest
        }else{
            elo = oldElo - (rest+3)
        }
    }
    

    return elo;

}

module.exports = {runningIndexWithSpeed, chess, runnerElo, runningIndex, teamVersusElo}