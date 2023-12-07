document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");

  if (slider) {
    // Activate the slider after a delay (adjust the delay as needed)
    setTimeout(() => {
      slider.classList.add("active");
    }, 500); // 1000 milliseconds = 1 second

    // Add scroll event listener to hide/show the slider based on scroll position
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

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight; // Get the height of the header

  window.addEventListener("scroll", function () {
    if (window.scrollY > headerHeight) {
      // Add 'sticky' class when scrolled past the header
      header.classList.add("sticky");
    } else {
      // Remove 'sticky' class when scrolled back to the top
      header.classList.remove("sticky");
    }
  });
});
