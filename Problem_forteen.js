// build Array from permutaion 

function permutaion(num){
    let arry = []
    for(let i=0; i<num.length; i++){
        arry[i]= num[num[i]]
    }
    return arry;
}

console.log(permutaion([0,2,1,5,3,4]));


