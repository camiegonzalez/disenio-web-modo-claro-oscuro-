$(document).ready(function () {
    $("#lightModeBtn").click(function () {
        $("body").removeClass("dark-mode").addClass("light-mode");
        $(".navbar").removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");
        $("table").removeClass("table-dark"); 
    });

    $("#darkModeBtn").click(function () {
        $("body").removeClass("light-mode").addClass("dark-mode");
        $(".navbar").removeClass("navbar-light bg-light").addClass("navbar-dark bg-dark");
        $("table").addClass("table-dark"); 
    });
});
