document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");

  if (slider) {
    // Add scroll event listener to control slider visibility
    window.addEventListener("scroll", function () {
      if (window.scrollY === 0) {
        // If scrolled to the top, add 'active' class to the slider
        slider.classList.add("active");
      } else {
        // If not at the top, remove 'active' class to hide the slider
        slider.classList.remove("active");
      }
    });
  } else {
    console.error("Slider element not found.");
  }
});

// // header sticky
// document.addEventListener("DOMContentLoaded", function () {
//   const header = document.querySelector(".header");

//   // Add 'sticky' class when scrolled past the header
//   header.classList.add("sticky");
// });

// hero-img scaling
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
