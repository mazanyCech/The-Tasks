const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,
    //This function check chances to win on object (attacker)
    checkChancesToWin(defenderobject) {
        let arrayChance = [];
        let numberPointToWin = 0

            let isArcher = this.archer > defenderobject.archer ? numberPointToWin + 1 : numberPointToWin;
            let isFootSoldier = this.footSoldier > defenderobject.footSoldier ? numberPointToWin + 1 : numberPointToWin;
            let isCavalry = this.cavalry > defenderobject.cavalry ? numberPointToWin + 1 : numberPointToWin;
            let isArtilery = this.artillery > defenderobject.artillery ? numberPointToWin + 1 : numberPointToWin;
            let sum = isArcher + isFootSoldier + isCavalry + isArtilery;

            let numberKeysDefender = Object.keys(defenderobject);
            arrayChance.push(sum)
            arrayChance.push(numberKeysDefender.length);
            
    },
    //added function, its increase the values by 5 if the keys is number
    improveArmy(){
        for(let numberValue of Object.values(this)){
            if(Number.isInteger(numberValue)) {
                let increasePoints = numberValue + 5;

                //console.log(increasePoints);
            }
        }           
    },
    
    attack(defender){
       
       
       }
    
};

const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
};

//attacker.checkChancesToWin.call(attacker, defender);
//attacker.improveArmy.call(attacker);
attacker.attack(defender);