function getMilk(money) {  
    var cost = 1.5;
    var bottles = (money/cost >> 0)
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + bottles + " bottles of milk.")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    return money%cost
}

function loveCalculator (){
    prompt("What is your name?: ");
    prompt("Loved person's name?: ");
    var value = Math.floor((Math.random()*100)+1)
    console.log("You have " + value + "% of combination!")
}

function checkGuests(){
    var guestsArray = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
    var guestName = prompt("Check invitation!");
    if (guestsArray.includes(guestName)) {
        alert("You are invited!");
    } else {
        alert("Sorry, you are out!");
    }
}

var outputi = [];
var count = 1;

function fizzBuzz(){
    if ((count % 3 === 0) && (count % 5 === 0)){
        outputi.push("FizzBuzz");
    }
    else if (count % 3 === 0){
        outputi.push("Fizz");
    }
    else if (count % 5 === 0){
        outputi.push("Buzz");
    }
    else {
        outputi.push(count);   
    }
    count++;
    console.log(outputi);
}

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]
function whosPaying(names) {
    var chosenToPay = Math.floor(Math.random()*(names.length));
    return names[chosenToPay] + " is going to buy lunch today!";   
}

function beer(){
    var numBeers = 99;
    while (numBeers >= 0) {
        if (numBeers === 0) {
            console.log("No more bottles of beer on the wall, no more bottles of beer.");
            console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
        else if (numBeers === 1) {
            console.log("1 bottle of beer on the wall, 1 bottle of beer.");
            console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        }
        else if (numBeers === 2) {
            console.log("2 bottles of beer on the wall, 2 bottles of beer.");
            console.log("Take one down and pass it around, 1 bottle of beer on the wall.");
        }
        else {
            console.log(numBeers + " bottles of beer on the wall, " + numBeers + " bottles of beer.");
            console.log("Take one down and pass it around, " + (numBeers-1) + " bottles of beer on the wall.");
        }
        numBeers--;
    }
}

function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var output = []
    if (n === 1) {
        output.push(0);
        return output;
    } 
    else if (n === 2) {
        output.push(0);
        output.push(1);
        return output;
    }
    else {
        output = [0,1];
        var lastNumber = output[1];
        var beforeLast = output[0];
        for (var i = 2; i < n; i++) {
            var newNumber = lastNumber + beforeLast;
            output.push(newNumber);
            var lastIndex = output.length;
            lastNumber = output[lastIndex-1];
            beforeLast = output[lastIndex-2];
        }
    }
    console.log(output);
}