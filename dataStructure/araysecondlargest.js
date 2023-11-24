
const array = [1,9,5,4,8,2,3,10]

let firstlargest= array[0]
let secondlargest = array[0]

for(let i = 1 ; i < array.length  ; i++){
    if(array[i] > firstlargest){
        console.log('if',array[i]);
        secondlargest = firstlargest
        firstlargest = array[i]
    }else if (array[i] > secondlargest && array[i] != firstlargest){
        console.log('elseif',array[i]);
        secondlargest = array[i]
    }
}

console.log(secondlargest);