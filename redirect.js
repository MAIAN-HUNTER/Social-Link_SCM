const buttons = document.querySelectorAll(".social-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const link = button.getAttribute("data-link");
    window.open(link, "_blank");
  });
});