
const today = new Date();
const currentYear = today.getFullYear();
const hamButton = document.querySelector("#hamButton");
const navMenu = document.querySelector(".menuLinks");

document.querySelector("#currentYear").textContent = currentYear;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

hamButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamButton.classList.toggle("open");
});