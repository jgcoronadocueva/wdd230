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

/**/
document.addEventListener("DOMContentLoaded", function () {
    const discoverSidebar = document.querySelector("#discover-sidebar");
    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        discoverSidebar.innerHTML = "<p>Welcome! Let us know if you have any questions.";
    }
    else {
        let currentDate = Date.now();
        let lastVisitDate = newDate(lastVisit).getTime;
        let timeDifference = currentDate - lastVisitDate;
        let daysDifference = Math.floor(timeDifference / 86400000);

        if (daysDifference < 1) {
            discoverSidebar.innerHTML = "<p>Back so soon! Awesome!<p>";
        }
        else {
            discoverSidebar.innerHTML = `<p>You last visited ${daysDifference} ${(daysDifference === 1) ? "day" : "days"} ago.</p>`;
        }
    }

    localStorage.setItem("lastVisit", Date.now());
});

/*DIRECTORY PAGE*/
const directoryURL = "https://jgcoronadocueva.github.io/wdd230/chamber/data/members.json";
const directory = document.querySelector("#directory");

async function getChamberMembers() {
    const response = await fetch(directoryURL);
    const data = await response.json();
    displayChamberMembers(data.companies);
}

function displayChamberMembers(companies) {
    companies.forEach((company) => {
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let website = document.createElement("a");
        let membership = document.createElement("h4");

        logo.setAttribute("src", company.logo);
        logo.setAttribute("alt", `${company.name} logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "auto");
        logo.setAttribute("height", "auto");

        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        membership.textContent = `${company.membership} Membership`;
        website.setAttribute("href", `${company.url}`);
        website.textContent = company.url;

        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(membership);
        card.appendChild(website);
        directory.appendChild(card);
    });
};

getChamberMembers();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showListView);

function showListView() {
    display.classList.add("list");
    display.classList.remove("grid");
}
