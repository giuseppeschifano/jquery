$(document).ready(function(){
    /* On click: Enlarge the font (120%) */

    $("#instructions li:eq(0)").click(function () { 
        $( "#content" ).css( "font-size", "120%" );
    });
    
    /* On click: Decrease the font size (80%) */

    $("#instructions li:eq(1)").click(function () { 
        $( "#content" ).css( "font-size", "80%" );
    });
    
    /* On click: Bold or normalize the green words */

    $("#instructions li:eq(2)").click(function () { 
        $(".green").toggleClass("bold");
    });
    
    /* On click: italic or normalize the green words */

    $("#instructions li:eq(3)").click(function () { 
        $(".green").toggleClass("italic");
    });
    
    /* On click: Replace the logo with another image */
    
    $("#instructions li:eq(4)").hover(function () { 
        $('img').attr("src", "images/koala.jpg");
    }, function() {
        $('img').attr("src", "images/jquery-logo.png");
    });
    
    /* On hover: Display the URL of links in a tooltip when hovering over links */
    
        // $(document).ready(function(){
        //     $('a').attr('data-toggle', 'tooltip');
        //     $('a').attr('title', 'hallo');
        // });

    $('a').hover(function(event) {
        $(this).attr('title', event.target.href);
    });

    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */
    
    $("#instructions li:eq(6)").one("click", function () {
        
        $("h2:eq(0)").prepend("Chapter 1. ");
        $("h2:eq(1)").prepend("Chapter 2. ");

    });

});

// $(selector).click(function)
// $(selector).one("click", function)


