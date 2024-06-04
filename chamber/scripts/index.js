const today = new Date();
const currentYear = today.getFullYear();

document.querySelector("#currentYear").textContent = currentYear;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

/*HAMBURGUER MENU*/
const hamButton = document.querySelector("#ham-button");
const navMenu = document.querySelector(".menu-links");

hamButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamButton.classList.toggle("open");
});