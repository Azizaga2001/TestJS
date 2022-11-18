const arr1 = [43];
const arr2 = [7];

function sum2(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) sum += arr1[i];
    for (let i = 0; i < arr2.length; i++) sum += arr2[i];

    return sum;
}

console.log(sum2(arr1, arr2));

let minutes = (5)

function convert(minutes) {
    var seconds = minutes * 60;
    return (seconds);
}

console.log(convert(minutes))

let arr = (0)

function sum(arr) {
    var number = arr + 1
    return (number)
}

console.log(sum(arr))

var a = 2;
var b = 10;
var c = 16;

function triArea(a, b, c) {
    return 1 / 2 * a * b * Math.sin((c * Math.PI) / 180);
}


console.log(triArea(a, b, c));

let years = (11)

function get_current_age (days) {
    return (years * 365)
}

console.log(get_current_age(days))