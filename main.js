// Show or hide the back-to-top button based on scroll position
window.onscroll = function () {
  toggleBackToTopButton();
};

function toggleBackToTopButton() {
  const button = document.getElementById("back-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
