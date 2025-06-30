function updateSal() {
  const elements = document.querySelectorAll("[data-sal]"); // Select all elements with Sal.js
  const screenWidth = window.innerWidth; // Get screen width

  elements.forEach((el) => {
    if (screenWidth < 992) {
      el.setAttribute("data-sal-temp", el.getAttribute("data-sal")); // Save default animation
      el.setAttribute("data-sal", "slide-up"); // Apply slide-up for small screens
    } else {
      if (el.hasAttribute("data-sal-temp")) {
        el.setAttribute("data-sal", el.getAttribute("data-sal-temp")); // Restore original animation
        el.removeAttribute("data-sal-temp"); // Remove temp attribute
      }
    }
  });

  sal(); // Re-initialize Sal.js to apply changes
}

// Run the function when the page loads and on resize
window.addEventListener("load", updateSal);
window.addEventListener("resize", updateSal);

// Initialize Sal.js
sal({
  once: true, // Run animation only once
});
