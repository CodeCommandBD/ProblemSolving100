// Richest Customer wealth 


// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.



function rich(account){
    let wealt = [];
    let bankSum = 0;
    for( let i= 0; i<account.length;i++){
        for(let b=0; b<account[i].length; b++){
            bankSum += account[i][b];
            
        }
        console.log(wealt[i]= bankSum);
        bankSum = 0;
        
    }
    for(let r =0;r<wealt.length;r++){
        if(wealt[0]<wealt[r]){
            wealt[0] = wealt[r]
        }
    }
    return wealt[0]
}

console.log(rich([[1,2,3],[3,2,1]]));
