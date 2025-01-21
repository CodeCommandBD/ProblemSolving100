const row = 5;
const col = 4;
let start = '';

for(let i =1; i<=row; i++){
    for(let j=1; j<=col; j++){
        start += "*"
    }
    start += '\n'
}

console.log(start);

const row2 = 5;
const col2 = 4;
let start2 = '';

for(let i =1; i<=row2; i++){
    for(let j=1; j<=col2; j++){
        if(j == 1 || j==col2){
            start2 += '*'
        }
        else if(i == 1 || i == row2){
            start2 += '*'
        }else{
            start2 += ' '
        }
    }
    start2 += '\n'
    
}

console.log(start2);



const go = 5;
let start3 = '';

for(let i = go; i>=1; i--){
    for(let j=1; j<=i; j++){
       start3 += '*'
    }
    start3 += '\n'
    
}

console.log(start3);

