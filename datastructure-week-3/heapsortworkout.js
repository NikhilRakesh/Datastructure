

function heap(array) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        heapsort(array, array.length, i)
    }

    for (let i = array.length - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]]
        heapsort(array, i, 0)
    }
}

function heapsort(array, n, i) {
    let largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    if (left < n && array[left] > array[largest]) {
        largest = left
    }
    if (right < n && array[right] > array[largest]) {
        largest = right
    }

    if (largest !== i){
        [array[largest],array[i]] = [array[i],array[largest]]
        heapsort(array,n,largest)
    }
}

const array = [12, 1, 5, 45, 65, 3, 8]

heap(array)

console.log("Sorted array:", array);