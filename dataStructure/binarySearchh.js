
function binarysearh(array,start,end ,target){

    const mid = Math.floor((start+end)/2)
    
    while (start > end ) {
    
        if(array[mid]===target){
            return mid 
        }else if (array[mid] > target){
              array[mid] +1
        }else{
             array[mid] - 1
        }
        
    }
}



const array = [1,2,3,4,5,6]

let start = 0
let end = array.length -1
const target = 6

const output = binarysearh(array,start,end ,target)

console.log(output);