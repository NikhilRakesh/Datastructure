function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6];
// const array = [5, 4, 3, 2, 1];
const target = 1;

const result = binarySearch(array, target);
console.log(result);
