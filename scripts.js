$(function() {
    $('form').submit(function() {
        var feeling = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'feeling_query.php',
            data: feeling
        });

        $("#inputbox").val("");
        return false;
    });
});

/*$(document).ready(function() {
  $(".circle").css('transform', 'translateY(20px)');
  $(".circle").css('transition-timing-function', 'ease');
});*/
