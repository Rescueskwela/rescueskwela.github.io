// When the user scrolls the page, execute myFunction 
window.onscroll = function() {Scroll()};

function Scroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function Unaccessible(){
	alert("Kababayan! Ang site na ito ay hindi mo pa maaring ma-access sapagkat hindi mo pa nasasagutan ang pagtatasa. Pagkatapos nito sagutan, pindutin ang submit button at ang 'pumunta sa module 2'. ")
}