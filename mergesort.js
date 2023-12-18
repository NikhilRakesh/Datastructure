
function Mergesort(array) {

    if (array.length <= 1) {
        return array
    }

    let mid = Math.floor(array.length / 2)

    let left = Mergesort(array.slice(0, mid))
    let right = Mergesort(array.slice(mid))

    return merge(left, right)
}

function merge(left, right) {

    let soterdarray = []

    while (left.length && right.length) {
        if (left[0] > right[0]) {
            soterdarray.push(right.shift())
        } else {
            soterdarray.push(left.shift())
        }
    }

    return [...soterdarray, ...left, ...right]

}


const array = [8, 7, 2, 3, 4, 1, 5, 6]

console.log(Mergesort(array));