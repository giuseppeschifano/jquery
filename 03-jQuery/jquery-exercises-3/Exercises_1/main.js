// Write your solution here

var count = 0;

$("#clickMe").click(function() {
    count++;
    $("#counter").html("My current count is: " + count);
});

