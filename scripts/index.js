
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
const body = document.querySelector("body");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const navBar = document.querySelector("nav");
const cardHeadings = document.querySelectorAll(".card h2");
const card = document.querySelector(".card");
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
        body.style.background = "#393e46";
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
        body.style.background = "#fff";
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

// 1️⃣ Initialize display element variable
const visitsDisplay = document.querySelector("#visits");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// 4️⃣ increment the number of visits by one.
numVisits++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

const weather = document.querySelector("#weather");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDescription = document.querySelector("#weather-description");
const temperature = document.querySelector("#temperature")

const apiKey = "be422bc81b3d81be22564640615930d7";
const latitude = "49.75";
const longitude = "6.64";


const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }

        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    weatherIcon.setAttribute("src", iconsrc)
    weatherIcon.setAttribute("alt", "current weather icon")
    temperature.innerHTML = `${data.main.temp}&deg;F`
    let description = data.weather[0].description;

    weatherDescription.textContent = ` - ${description}`;
}

apiFetch();