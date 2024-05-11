
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

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const navBar = document.querySelector("nav");
const cardHeadings = document.querySelectorAll(".card h2");
const card = document.querySelector(".card");
//const navOptions = document.querySelector("nav a")
const cardList = document.querySelector(".card ul");
const cardLinks = document.querySelectorAll("main a");
const navLinks = document.querySelectorAll("nav a");
const navActive = document.querySelector("nav .active");
const cardDivs = document.querySelectorAll(".card div");


modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌛")) {
        header.style.background = "#2d4059";
        header.style.color = "#fff";
        navBar.style.background = "#9B3922";
        hamButton.style.color = "#fff";
        navMenu.style.color = "#E2DFD0";
        navLinks.forEach(link => {
            link.style.color = "#fff";
            link.addEventListener("mouseover", () => {
                link.style.color = "#000";
            });
            link.addEventListener("mouseout", () => {
                link.style.color = "#fff";
            });
        });
        navActive.style.background = "#606470";
        main.style.background = "#393e46";
        main.style.color = "#fff";
        card.style.background = "#393e46";
        card.style.color = "#fff";
        cardDivs.forEach(div => {
            div.style.background = "#393e46";
            div.style.color = "#fff";
        });
        cardHeadings.forEach(heading => {
            heading.style.background = "#9B3922";
            heading.style.color = "#fff";
        });
        footer.style.background = "#9B3922";
        footer.style.color = "#fff";
        cardLinks.forEach(link => {
            link.style.color = "#ECB159";
        });
        modeButton.textContent = "🌞";
    } else {
        header.style.background = "#DEB887";
        header.style.color = "#000";
        navBar.style.background = "#87ADDE";
        navBar.style.color = "#fff";
        hamButton.style.color = "#000";
        navMenu.style.color = "#fff";
        navLinks.forEach(link => {
            link.style.color = "#000";
            link.addEventListener("mouseover", () => {
                link.style.color = "#fff";
            });
            link.addEventListener("mouseout", () => {
                link.style.color = "#000";
            });
        });
        navActive.style.background = "#e2d9c4b3";
        main.style.background = "#fff";
        main.style.color = "#000";
        card.style.background = "#fffdfae7";
        card.style.color = "#000";
        cardDivs.forEach(div => {
            div.style.background = "#fffdfae7";
            div.style.color = "#000";
        });
        cardHeadings.forEach(heading => {
            heading.style.background = "#DEB887";
            heading.style.color = "#000";
        });
        footer.style.background = "#DEB887"
        footer.style.color = "#000";
        cardLinks.forEach(link => {
            link.style.color = "#4f3b78";
        });
        modeButton.textContent = "🌛";
    }
});
