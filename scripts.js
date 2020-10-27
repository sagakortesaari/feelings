$(function () {
    $("form").submit(function () {
        var feeling = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "feeling_query.php",
            data: feeling,
        });

        var feelings = document.getElementById("feelings");
        var colors = [
            "#A9B5D9",
            "#F2A477",
            "#F29472",
            "#F2C4C4",
            "#EA6732",
            "#283483",
        ];
        var randomize = Math.floor(Math.random() * 6);
        var circlecolor = colors[randomize];
        var feeling = document.createElement("div");
        feeling.innerHTML = $("#inputbox").val();
        feeling.classList.add("circle");
        feeling.style.backgroundColor = circlecolor;
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
