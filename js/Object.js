var obj = {
    color:'red',
    age:20,
    love:'not',
    "location":'dhaka',
    nextobj:{
        favColor: 'red'
    }
}

obj.name = ['shanto', 'kumar'] //add key and value

obj.color = 'blue' //overwrite or replace value

Object.freeze(obj)  //object locked when use object.freeze and value will not change 

obj.color = 'green'

console.log(obj);
console.log(obj.love);
console.log(obj.location);
console.log(obj.nextobj.favColor);

