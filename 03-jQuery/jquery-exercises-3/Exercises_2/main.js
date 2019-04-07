// Write your solution here

var count = 0;

$("#clickAdd").click(function() {
    count++;
    $("#counter").html("My current count is: " + count);
});

$("#clickSub").click(function() {
    count--;
    $("#counter").html("My current count is: " + count);
});

