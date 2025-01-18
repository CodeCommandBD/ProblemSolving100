//write a function that return the sum of two numbers.
//write a function that return the sum of all numbers regardless of # of params.


function sum(params1,params2){
    return params1 + params2
}
console.log(sum(1,2));


function totalsum(...params1){
    let total = 0;
    params1.forEach(singlepar =>(
        total = total + singlepar
    ))
    return total;
}

console.log(totalsum(1,2,5,5));
