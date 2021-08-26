// Print odds 1-20
var sum = 0;
function addOddNum(num) {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 === 1) {
            sum += i;
        }
    } return sum;

}
var oddNum = addOddNum(20);
console.log(oddNum);

// Decreasing Multiples of 3
for (var i = 100; i >= 3; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }

}

//Print the sequence
for (var i = 4; i >= -4; i = i - 1.5) {
    console.log(i);
}

//Sigma
var sumNum = 0;
function sumOfNum(num) {
    for (var i = 1; i <= num; i++) {
        sumNum += i;
        // console.log(sumNum);
    }
    return sumNum;
}

var sumResult = sumOfNum(100);
console.log("Sum result is :" + sumResult);

//Factorial
var product = 1;
function factorial(num) {
    for (var i = 1; i <= num; i++) {
        product *= i;
    }
    return product;

}

var factResult = factorial(12);
console.log("Factorial is : " + factResult);