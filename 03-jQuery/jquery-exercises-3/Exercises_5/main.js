
// Write your solution here

$(".square").css({
    "height": 60,
    "width": 60
});


$(document).keydown(function(e){

    switch (e.which){
    case 37: //left arrow key
    $(".square").css({
    left: "-=10"
    });
    break;
    case 38: //up arrow key
    $(".square").css({
    top: "-=10"
    });
    break;
    case 39: //right arrow key
    $(".square").css({
    left: "+=10"
    });
    break;
    case 40: //bottom arrow key
    $(".square").css({
    top: "+=10"
    });
    break;
    }
    });

 

