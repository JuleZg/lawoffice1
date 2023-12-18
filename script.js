//  ********************hero slider********************

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");

  if (slider) {
    // Initially, add 'active' class to the slider
    slider.classList.add("active");

    // Add scroll event listener to control slider visibility
    window.addEventListener("scroll", function () {
      if (window.scrollY <= 100) {
        // If scrolled to the top or down a bit, keep 'active' class on the slider
        slider.classList.add("active");
      } else {
        // If scrolled down more, remove 'active' class to hide the slider
        slider.classList.remove("active");
      }
    });
  } else {
    console.error("Slider element not found.");
  }
});

// ********************hero-img scaling********************
document.addEventListener("DOMContentLoaded", function () {
  const heroImg = document.querySelector(".hero-img");

  if (heroImg) {
    window.addEventListener("scroll", function () {
      // Check if the user is at the top of the page
      if (window.scrollY === 0) {
        // Add 'scaled' class to the image
        heroImg.classList.add("hero-img-scaled");
      } else {
        // Remove 'scaled' class if the user is not at the top
        heroImg.classList.remove("hero-img-scaled");
      }
    });
  }
});

// ********************load the header********************
function loadHeader() {
  // Fetch the header.html content
  fetch("header.html")
    .then((response) => response.text())
    .then((html) => {
      // Insert the header content into the headerContainer div
      document.getElementById("headerContainer").innerHTML = html;
    })
    .catch((error) => console.error("Error loading header:", error));
}
// Call the loadHeader function when the page loads
document.addEventListener("DOMContentLoaded", loadHeader);

// ********************load the footer********************
function loadFooter() {
  // Fetch the footer.html content
  fetch("footer.html")
    .then((response) => response.text())
    .then((html) => {
      // Insert the footer content into the footerContainer div
      document.getElementById("footerContainer").innerHTML = html;
    })
    .catch((error) => console.error("Error loading footer:", error));
}
// Call the loadFooter function when the page loads
document.addEventListener("DOMContentLoaded", loadFooter);
