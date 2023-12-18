const array = [8, 7, 2, 3, 4, 1, 5, 6]

for (let i = 1; i < array.length; i++) {
    const element = array[i];
    let j = i - 1
    while (j >= 0 && array[j] > element) {
        array[j + 1] = array[j]
        j--
    }
    array[j + 1] = element
}

console.log(array);