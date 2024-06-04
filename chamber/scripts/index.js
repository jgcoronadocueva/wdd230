const today = new Date();
const currentYear = today.getFullYear();

document.querySelector("#currentYear").textContent = currentYear;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

/*HAMBURGUER MENU*/
const hamburger = document.querySelector("#hamburger-button");
const navMenu = document.querySelector(".menu-links");

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});