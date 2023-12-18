const array = [8, 7, 2, 3, 4, 1, 5, 6]


for (let i = 0; i < array.length - 1; i++) {
    let minindex = i;
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minindex]) {
            minindex = j
        }
    }

    if (minindex != i) {
        [array[i], array[minindex]] = [array[minindex], array[i]]
    }

}

console.log(array);