function factorial(num) {
    if (num === 1) {
        return 1
    }
    return num * factorial(num - 1)
}
const output = factorial(5)
// console.log(output);




function rangeofnumbers(start, end) {
    if (end < start) {
        return []
    }
    const number = rangeofnumbers(start, end - 1)
    number.push(end)
    return number
}

const output2 = rangeofnumbers(0, 5)
console.log(output2);