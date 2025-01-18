//for inputArray = [1,2,1], elementToReplace = 1 and subtrationElem = 3,
// the output should be arrayReplace(inputArray,elementToReplace, substrationElem) = [3,2,3]

function arrayReplace(inputArray, elementToReplace, substrationElem){
    inputArray.forEach((element, i)=> {
        if(element === elementToReplace){
            inputArray[i] = substrationElem
        }
    });
    console.log(inputArray)
}

arrayReplace([1,2,1],1,3)