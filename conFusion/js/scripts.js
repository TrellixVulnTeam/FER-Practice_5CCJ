
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carousel-pause").click(function () {
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function () {
        $("#mycarousel").carousel('cycle');
    });
});

$(document).ready(function () {
    $("#login" ).click(function() {
        $("#login").attr("data-toggle", "modal");
        $("#login").attr("data-target", "#loginModal");
        
      });
});

$(document).ready(function () {
    $("#reserveButton" ).click(function() {
        $("#reserveButton").attr("data-toggle", "modal");
        $("#reserveButton").attr("data-target", "#reserveTable");
        
      });
});
