// Manipulation of styles with jquery
$("h1").css("color", "red"); // Set style
console.log($("h1").css("color")); // Get the style
$("h1").addClass("test");

// Manipulation of text with jquery
//$("button").text("Don't click me"); // the sign $ returns all the matches of "button"
//$("button").html("<em>Hey</em>");   // .html takes the html tag instead of just bare text

// Manipulation of attributes with jquery
//console.log($("a").attr("href")); // Get the value of an attribute
//console.log($("a").attr("class"));
//$("a").attr("href", "https://www.linkedin.com"); // Set the value of an attribute

// Manipulation of events listeners with jquery
$("h1").click(function() {
    $("h1").css("color","blue");
})
$("button").click(function() {      // Bind the function to all of the buttons, essentialy a for loop
    $("h1").css("color","blue");
})

$(document).keypress(function(event) {      // Detect key being pressed
    $("h1").text(event.key);
})

$("h1").on("mouseover", function(){     // Simpler way to detect a event
    $("h1").css("color","blue");
})

// Adding and removing elements with jquery
$("h1").before("<button>before</button>");      // four tipes of adding elements
$("h1").after("<button>after</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");
//$("button").remove();                           // removal os all buttons

// Animations with jquery
$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});      // chaining 3 animations togetter
})