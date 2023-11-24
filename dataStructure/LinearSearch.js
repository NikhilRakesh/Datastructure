
function linearsearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (target === array[i]) {
            return i
        }
    }
    return -1
}



const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const target = 9;

const output = linearsearch(array, target)
console.log(output);