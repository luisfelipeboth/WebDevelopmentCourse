// First Exercise

var message = prompt("Compose your message:");
var messageCount = message.length;
alert("You have written "+ messageCount + " characters, you have " + (140 - messageCount) + " characters remaining.")

// Second Exercise

var name = prompt("What is your name?: ");
name = name.toLowerCase();
var firstLetter = name.slice(0,1).toUpperCase()

alert("Hello, " + firstLetter + name.slice(1,name.length))

