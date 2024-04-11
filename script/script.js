 // Add active class to the current button (highlight it)
 var navbarItems = document.querySelectorAll('.navbar a');
 for (var i = 0; i < navbarItems.length; i++) {
   navbarItems[i].addEventListener('click', function() {
     var current = document.getElementsByClassName('active');
     current[0].className = current[0].className.replace(' active', '');
     this.className += ' active';
   });
 }
 //button "More Information"
 // JavaScript for the "More Information" button
document.getElementById("moreInfoBtn").onclick = function() {
    window.location.href = "about.html"; // Redirect to aboutus.html page
  }
// JavaScript for the "View More" button
document.getElementById("viewMoreBtn").onclick = function() {
  window.location.href = "gallery.html"; // Redirect to gallery.html page
}

  