//create a  function that converts an object into an array . where each element represents a key-value pair in the form of an array.

//toArray({a:1,b:2}) - [["a", 1], ["b",2]]


const arry = (obj) =>{
    return Object.keys(obj).map(k => [k,obj[k]])
}

console.log(arry({a:1,b:2}));
