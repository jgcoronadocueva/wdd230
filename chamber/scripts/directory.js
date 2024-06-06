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
        logo.setAttribute("width", "auto");
        logo.setAttribute("height", "auto");
        logo.setAttribute("loading", "lazy");

        name.textContent = `${company.name}`;
        address.textContent = `${company.address}`;
        membership.textContent = `${company.membership_level} Membership`;
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