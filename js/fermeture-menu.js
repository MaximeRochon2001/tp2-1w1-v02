const checkbox = document.getElementById("chk-burger");
const links = document.querySelectorAll(".navigation a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    checkbox.checked = false; // Ferme le menu
  });
});
