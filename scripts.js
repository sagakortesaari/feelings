$(function() {
    $('form').submit(function() {
        var feeling = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'feeling_query.php',
            data: feeling
        });

        var feelings = document.getElementById('feelings');
        var feeling = document.createElement("div");
        feeling.innerHTML = $("#inputbox").val();
        feeling.classList.add("circle");
        feelings.prepend(feeling);
        console.log("done");
        $("#inputbox").val("");
        return false;
    });
});


/*$(document).ready(function() {
  $(".circle").css('transform', 'translateY(20px)');
  $(".circle").css('transition-timing-function', 'ease');
});*/
