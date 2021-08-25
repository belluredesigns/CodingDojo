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