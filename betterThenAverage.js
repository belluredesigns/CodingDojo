function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    var average = sum / arr.length;
    // console.log("sum is " + sum)
    // console.log("average is :" + average)
    var count = 0;
    // count how many values are greater than the average

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
            // console.log("Count is :  " + count + "  " + arr[i]);
        }
    }

    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
