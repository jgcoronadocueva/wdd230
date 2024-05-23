const today = new Date();
const currentYear = today.getFullYear();

document.querySelector("#currentYear").textContent = currentYear;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;


const hamButton = document.querySelector("#hamButton");
const navMenu = document.querySelector(".menuLinks");

hamButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamButton.classList.toggle("open");
});