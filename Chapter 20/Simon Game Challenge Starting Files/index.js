// ------ Declaration of all variables ----- //
var buttonColours = ["red", "blue", "green", "yellow"];     // All the buttons
var gamePattern = [];                                       // Selected pattern by random numbers
var userClickedPattern = [];                                // User selected pattern
var fisrtTime = true;                                       // Handles the first execution of the game
var level = 0;                                              // Keep track of the current level
var currentIndex = 0;                                       // Keep track of the current index when comparing if the user guessed right/wrong
var playerPlaying = false;                                  // Keep track of the player playing to block the buttons if it's not hist time to play
var gameFinished = false;                                   // Keep track if the game ended or not

// ------ Handles the click in the buttons ----- //
$(".btn").click(function(){
    if (playerPlaying){                                 // Check if it's the player time to play or the "computer" is playing
        var userChosenColour = this.id;                 // Get the id of the button clicked
        userClickedPattern.push(userChosenColour);      // Add the selected color to the array
        animatePress(userChosenColour);                 // Animation of the button when clicked
        playSound(userChosenColour);                    // Play the sound when clicked
        checkAnswer(level);                             // Check if the button clicked is correct or not
    }
});

// ------ Handles the pressing of a key in the keyboard ----- //
$(document).keypress(function(event) {
    if (fisrtTime) {                    // Runs only when you refresh the page
        nextSequence();
    }
    if (gameFinished){                  // Handles the "Y" letter when the game finish
        if (event.key === "y"){
            startOver();
            nextSequence();
        }
    }
});

// ------ Randomize wich will be the next button in the sequence ----- //
function nextSequence() {
    var interval = 1020 - (level * 20);                                                 // Changes the speed of remembering to dificult the game
    var randomNumber = Math.floor(Math.random() * 4);                                   // Randomize, select and saves the next button
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    if (interval < 180){                                                                // Set an limit to interval
        interval = 180;
    }
    for (index = 0; index < gamePattern.length; index++) {                              // Plays all buttons already selected by the computer with animation and sound
        (function(index){
            setTimeout(function() {
                $("#" + gamePattern[index]).fadeIn(100).fadeOut(100).fadeIn(100);
                playSound(gamePattern[index]);
            }, interval * index);
        }(index));
        
    }
    fisrtTime = false;
    playerPlaying = true;
    level++;
    $("#level-title").text("Level " + level);                                           // Changes the title for each level
}

// ------ Check if the clicked button is equal to the one selected ----- //
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentIndex] === gamePattern[currentIndex]) {       // Check if the clicked button is equal to the selected one by the computer
        currentIndex++;
        if (currentIndex >= currentLevel) {                                     // Check if it is the last guess, if not, the program waits until it is finished
            playerPlaying = false;
            setTimeout(function() {                                             // Wait one second to call the next sequence
                userClickedPattern = [];
                currentIndex = 0;
                nextSequence();
            }, 1000);
        }
    }
    else {                                                                      // Player guessed wrong and the game is over
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Y to Restart");
        gameFinished = true;
        playerPlaying = false;
    }
}

// ------ Handles the sounds to be played ----- //
function playSound(name) {
    switch (name) {
        case "green":
            var audio = new Audio("sounds/green.mp3");
            break;
        case "red":
            var audio = new Audio("sounds/red.mp3");
            break;
        case "yellow":
            var audio = new Audio("sounds/yellow.mp3");
            break;
        case "blue":
            var audio = new Audio("sounds/blue.mp3");
            break;
        case "wrong":
            var audio = new Audio("sounds/wrong.mp3");
            break;

        default:
            break;
    }
    audio.play();
}

// ------ Handles the animation of the button clicked ----- //
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100)
}

// ------ Resets all the variables to start playing again ----- //
function startOver() {
    level = 0;
    playerPlaying = false;
    fisrtTime = true;
    gamePattern = [];
    userClickedPattern = [];
    currentIndex = 0;
    gameFinished = false;
}