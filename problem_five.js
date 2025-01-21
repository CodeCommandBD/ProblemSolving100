const prime=(num)=>{
    let total = 0
    for(let i = 2; i<num; i++){
        for(let j = 2; j<num; j++){
            if(i===j){
                total += i
            }
            if(i%j === 0){
                break
            }
        }
    }
    return total
}
console.log(prime(10));
