const array = [8,7,2,3,4,1,5,6]


for (let i = 0; i < array.length; i++) {
for (let j = 0; j < array.length-i-1; j++) {
    if(array[j]>array[j+1]){
        const temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
    }    
}    
}



console.log(array);