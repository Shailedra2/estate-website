// Handle contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const balloonMessage = document.getElementById("balloonMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Show balloon message
      balloonMessage.classList.add("show");

      // Hide balloon after 3 seconds
      setTimeout(() => {
        balloonMessage.classList.remove("show");
      }, 3000);

      // Reset form
      contactForm.reset();
    });
  }
});
