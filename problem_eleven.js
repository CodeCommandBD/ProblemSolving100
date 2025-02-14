// create a function that takes a number x and a character y ('m' for male, 'f' for memale), and returns the name of an ancestor(m/f) or descendant(m/f).


// if the number is negative, return the related ancestor.
// if the number is positive, return the related descendant.


// you are generation 0. in the case of 0 (male or female), return "me!".

// Examples

// generation(2, "f") - "granddaughter"
// generation(-3, "m") - "great grandfather"
// generation(1, "f") - "daughter"

 
//generation Male Female

// -3 great grandfather -- great grandmother
// -2 grandfather -- grandmother
//-1 father -- mother
// 0 me 
// 1 son -- daughter
// 2 grandson -- granddaughter
// 3 great grandson -- great granddaughter

function generation(x, y) {
    const generations = {
        "-3": { "m": "great grandfather", "f": "great grandmother" },
        "-2": { "m": "grandfather", "f": "grandmother" },
        "-1": { "m": "father", "f": "mother" },
        "0": { "m": "me!", "f": "me!" },
        "1": { "m": "son", "f": "daughter" },
        "2": { "m": "grandson", "f": "granddaughter" },
        "3": { "m": "great grandson", "f": "great granddaughter" }
    };
    
    return generations[x]?.[y] || "Invalid input";
}
console.log(generation(0,'m'));
