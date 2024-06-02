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

/*FORM*/
