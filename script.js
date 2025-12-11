$(document).ready(function () {
    console.log("jQuery is loaded and working!");
    $("#contactBtn").click(function () {
        alert("You can contact me at: nandannaik@zohomail.in");
    });
    $("#downloadBtn").click(function () {
        alert("Download feature coming soon! For now, you can print this page (Ctrl+P)");
    });
    $("nav a").hover(
        function () {
            $(this).css("background-color", "#3498db");
        },
        function () {
            $(this).css("background-color", "#2980b9");
        }
    );
    $(".skill-level").each(function () {
        var width = $(this).css("width");
        $(this).css("width", "0");
        $(this).animate({
            width: width
        }, 2000);
    });
    $("#contactForm").submit(function (event) {
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        var isValid = true;
        $(".error-message").hide();
        $("input, textarea").removeClass("error");
        if (name === "" || name.trim() === "") {
            $("#nameError").show();
            $("#name").addClass("error");
            isValid = false;
        }
        if (email === "" || email.trim() === "") {
            $("#emailError").show();
            $("#email").addClass("error");
            isValid = false;
        } else {
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                $("#emailError").show();
                $("#email").addClass("error");
                isValid = false;
            }
        }
        if (message === "" || message.trim() === "") {
            $("#messageError").show();
            $("#message").addClass("error");
            isValid = false;
        }
        if (isValid) {
            $("#contactForm").hide();
            $("#successMsg").show();
            $("html, body").animate({ scrollTop: 0 }, 500);
            setTimeout(function () {
                $("#contactForm")[0].reset();
                $("#successMsg").hide();
                $("#contactForm").show();
            }, 3000);
        }
    });
    $(".card").hover(
        function () {
            $(this).css("box-shadow", "0 4px 8px rgba(0,0,0,0.2)");
        },
        function () {
            $(this).css("box-shadow", "none");
        }
    );
    $(".button").hover(
        function () {
            $(this).css("transform", "scale(1.05)");
            $(this).css("transition", "all 0.3s");
        },
        function () {
            $(this).css("transform", "scale(1)");
        }
    );
    $("body").append('<button id="backToTop" class="button" style="position: fixed; bottom: 20px; right: 20px; display: none;">↑ Top</button>');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#backToTop").fadeIn();
        } else {
            $("#backToTop").fadeOut();
        }
    });
    $("#backToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });
    $(".section").css("opacity", "0");
    $(".section").each(function (index) {
        $(this).delay(200 * index).animate({
            opacity: 1
        }, 800);
    });
    $("table tr").click(function () {
        $("table tr").css("background-color", "");
        $(this).css("background-color", "#e3f2fd");
    });
});
function showTime() {
    var now = new Date();
    var time = now.toLocaleTimeString();
    console.log("Current time: " + time);
}
showTime();
