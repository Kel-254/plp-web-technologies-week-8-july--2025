document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (form.checkValidity()) {
        message.classList.remove("hidden");
        form.reset();
      } else {
        alert("Please fill in all fields correctly.");
      }
    });
  }
});
