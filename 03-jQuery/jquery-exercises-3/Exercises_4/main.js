
// Write your solution here

$("#rectangle").css({
    "height": 60,
    "width": 140
});


$(document).ready(function(){


    $('#button0').click(function(){
      $("div").animate({
        left: '250px',
        opacity: '0.3',
        height: '150px',
        width: '150px'
      });
    });

    $('#button1').click(function(){
        $("#rectangle").height("+=10");
        if ($("#rectangle").height() > 100 ) {
            $("#rectangle").height("10px");
        };  
    });

    $('#button2').click(function(){
        $("#rectangle").css("background-color", "green");
        $("#rectangle").css("opacity", "0.75");
    });

    $('#button3').click(function(){
        $("#rectangle").css("background-color", "blue");
        $("#rectangle").css("opacity", "0.75");
    });

    $('#button4').click(function(){
        $("#rectangle").hide(1000);
        $("#rectangle").css("opacity", "1");
    });

    $('#button5').click(function(){
        $("#rectangle").show(1000);
        $("#rectangle").css("opacity", "0.5");
    });

  });




