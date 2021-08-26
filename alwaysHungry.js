function alwaysHungry(arr) {
    // your code here 
    var check = arr.includes("food");
    if (check === true) {
        console.log("yummy")
    } else {
        console.log("I'm hungry");
    }

}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log I'm hungry
