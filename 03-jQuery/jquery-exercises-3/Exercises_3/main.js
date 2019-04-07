// Write your solution here


var random =  (Math.floor(Math.random() * 25) + 1);
var count = 0


$("#checkRandom").click(function() {

    var x = parseInt(document.getElementById('myRandom').value);
    count++;
    

    console.log("x=  " + x + " | counter=  " + count + " | random=  " + random);

    if ( x > random ) {
        alert(' MORE: your number is HIGHER than the random number');
    } else if ( x < random ) {
        alert(' LESS: your number is LOWER than the random number');
    } else  {
        $("#counter").html("My current count is: " + count);
        alert(' RIGHT: your number EQUALS the random number');

    }


});



