


for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        handleClickSwitch(this.innerHTML);
        handleAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {
    handleClickSwitch(event.key);
    handleAnimation(event.key);
});

function handleClick(playedKey) {
    console.log(playedKey);
    if (playedKey === "w") {
        var audio = new Audio("sounds/tom-1.mp3");
    } 
    else if (playedKey === "a") {
        var audio = new Audio("sounds/tom-2.mp3");
    }
    else if (playedKey === "s") {
        var audio = new Audio("sounds/tom-3.mp3");
    }
    else if (playedKey === "d") {
        var audio = new Audio("sounds/tom-4.mp3");
    }
    else if (playedKey === "j") {
        var audio = new Audio("sounds/snare.mp3");
    }
    else if (playedKey === "k") {
        var audio = new Audio("sounds/crash.mp3");
    }
    else if (playedKey === "l") {
        var audio = new Audio("sounds/kick-bass.mp3");
    }

    audio.play();
}

function handleClickSwitch(pressedKey) {
    switch (pressedKey) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            break;
        
        default:
            console.log(pressedKey);
            break;
    }
    audio.play();
}

function handleAnimation(playedKey) {
    document.querySelector("." + playedKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + playedKey).classList.remove("pressed");
    }, 100);
}