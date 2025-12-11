/*
   Simple JavaScript file using jQuery
   Created by: A Learning Developer
   This file contains basic jQuery code for interactivity
*/

// Wait for the page to load completely
$(document).ready(function () {

    // Console message to show jQuery is working
    console.log("jQuery is loaded and working!");

    // ===================================
    // BUTTON CLICK EFFECTS
    // ===================================

    // Contact button on home page
    $("#contactBtn").click(function () {
        alert("You can contact me at: john.doe@email.com");
    });

    // Download button on resume page
    $("#downloadBtn").click(function () {
        alert("Download feature coming soon! For now, you can print this page (Ctrl+P)");
    });

    // ===================================
    // NAVIGATION HOVER EFFECTS
    // ===================================

    // Change color when hovering over navigation links
    $("nav a").hover(
        function () {
            // When mouse enters
            $(this).css("background-color", "#3498db");
        },
        function () {
            // When mouse leaves
            $(this).css("background-color", "#2980b9");
        }
    );

    // ===================================
    // SKILL BAR ANIMATION
    // ===================================

    // Animate skill bars when page loads
    $(".skill-level").each(function () {
        // Get the width from style attribute
        var width = $(this).css("width");
        // Start from 0
        $(this).css("width", "0");
        // Animate to the actual width
        $(this).animate({
            width: width
        }, 2000); // 2000 milliseconds = 2 seconds
    });

    // ===================================
    // CONTACT FORM VALIDATION
    // ===================================

    $("#contactForm").submit(function (event) {
        // Prevent form from submitting normally
        event.preventDefault();

        // Get form values
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        // Variable to track if form is valid
        var isValid = true;

        // Reset error messages and styling
        $(".error-message").hide();
        $("input, textarea").removeClass("error");

        // Check if name is empty
        if (name === "" || name.trim() === "") {
            $("#nameError").show();
            $("#name").addClass("error");
            isValid = false;
        }

        // Check if email is empty or invalid
        if (email === "" || email.trim() === "") {
            $("#emailError").show();
            $("#email").addClass("error");
            isValid = false;
        } else {
            // Simple email validation
            var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                $("#emailError").show();
                $("#email").addClass("error");
                isValid = false;
            }
        }

        // Check if message is empty
        if (message === "" || message.trim() === "") {
            $("#messageError").show();
            $("#message").addClass("error");
            isValid = false;
        }

        // If form is valid, show success message
        if (isValid) {
            // Hide the form
            $("#contactForm").hide();
            // Show success message
            $("#successMsg").show();
            // Scroll to top to see the message
            $("html, body").animate({ scrollTop: 0 }, 500);

            // Reset form after 3 seconds and show it again
            setTimeout(function () {
                $("#contactForm")[0].reset();
                $("#successMsg").hide();
                $("#contactForm").show();
            }, 3000);
        }
    });

    // ===================================
    // CARD HOVER EFFECTS
    // ===================================

    // Add shadow effect when hovering over cards
    $(".card").hover(
        function () {
            // When mouse enters
            $(this).css("box-shadow", "0 4px 8px rgba(0,0,0,0.2)");
        },
        function () {
            // When mouse leaves
            $(this).css("box-shadow", "none");
        }
    );

    // ===================================
    // BUTTON HOVER EFFECTS
    // ===================================

    // Make buttons slightly bigger when hovering
    $(".button").hover(
        function () {
            // When mouse enters
            $(this).css("transform", "scale(1.05)");
            $(this).css("transition", "all 0.3s");
        },
        function () {
            // When mouse leaves
            $(this).css("transform", "scale(1)");
        }
    );

    // ===================================
    // SMOOTH SCROLL TO TOP
    // ===================================

    // Add a "Back to Top" button
    $("body").append('<button id="backToTop" class="button" style="position: fixed; bottom: 20px; right: 20px; display: none;">↑ Top</button>');

    // Show button when scrolling down
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#backToTop").fadeIn();
        } else {
            $("#backToTop").fadeOut();
        }
    });

    // Scroll to top when clicking the button
    $("#backToTop").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

    // ===================================
    // FADE IN ANIMATION FOR SECTIONS
    // ===================================

    // Hide sections initially
    $(".section").css("opacity", "0");

    // Fade in sections one by one
    $(".section").each(function (index) {
        $(this).delay(200 * index).animate({
            opacity: 1
        }, 800);
    });

    // ===================================
    // TABLE ROW HIGHLIGHT
    // ===================================

    // Highlight table rows on click
    $("table tr").click(function () {
        // Remove highlight from all rows
        $("table tr").css("background-color", "");
        // Add highlight to clicked row
        $(this).css("background-color", "#e3f2fd");
    });

});

// Simple function to show current time
function showTime() {
    var now = new Date();
    var time = now.toLocaleTimeString();
    console.log("Current time: " + time);
}

// Call the function when page loads
showTime();
