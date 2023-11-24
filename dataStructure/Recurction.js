let count = 0
function factorial(n) {
    count += n
   if(count>=100){
    return count
   }
   return factorial(count)
}

const result = factorial(5);
console.log(result);
