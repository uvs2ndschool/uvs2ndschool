
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#navigation");

  // Гар утасны цэс
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });
  }

  // Амжилтын дэд цэс
  document.querySelectorAll(".dropdown-button").forEach(button => {
    button.addEventListener("click", () => {
      const dropdown = button.closest(".dropdown");
      const isOpen = dropdown.classList.toggle("open");

      button.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });
  });

  // Одоогийн оныг автоматаар харуулах
  const year = document.querySelector("#year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
