 function binarysearch(array , start,end,target){

    if(start>end){
        return -1
    }
    const mid = Math.floor((start + end) / 2);

    if(array[mid]===target){
        return mid
    }else if(array[mid]>target){
        return binarysearch(array, start, mid - 1, target);
    }else {
        return binarysearch(array, mid + 1, end,target);
    }
 
 }

 const array = [1,2,3,4,5,6,7]
 const target =7

 const output = binarysearch(array,0,array.length-1,target)

 console.log(output);
