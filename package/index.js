const defaultElo = 100;

function runningIndex(elo, distance) {
    if (elo===null) elo = defaultElo;
    const equation = distance * (elo/10) 
    return distance - (equation*elo/100)/distance
}

function runningIndexWithSpeed(elo, distance, minPerKm) {
    if (elo===null) elo = defaultElo;
    const equation = distance * (elo/10) 
    return (distance - (equation*elo/100)/distance ) / minPerKm
}

// kisan jälkeen päivitettävä ongelmana jos monta kisaa missä samat juoksut
function updateElo(oldElo, placement, eloPa, amountOfParticipants) {
    let elo;
    let first = 5;
    let secThird = 2.5
    let rest = 5

    if(amountOfParticipants<=3) {
        first = 2.5
        secThird = 1.5
    }
    
    if(placement===1 && eloPa>oldElo){
        elo = oldElo + first +2
    }
    else if(placement===1 && eloPa<=oldElo){
        elo = oldElo + first
    }

    else if(placement>1 && placement<=3){
        if(eloPa>oldElo){
            elo = oldElo - secThird
        }else{
            elo = oldElo - (secThird+2.5)
        }
        
    }else{
        if(eloPa>oldElo){
            elo = oldElo - rest
        }else{
            elo = oldElo - (rest+3)
        }
    }
    

    return elo;

}


module.exports = {runningIndexWithSpeed, updateElo, runningIndex}