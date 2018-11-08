// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var tconts = document.getElementById("t-contents");

// Get the offset position of the navbar
var sticky = tconts.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    tconts.classList.add("sticky");
  } else {
    tconts.classList.remove("sticky");
  }
}