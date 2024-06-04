/*DISCOVER PAGE*/

document.addEventListener("DOMContentLoaded", function () {
    const discoverSidebar = document.querySelector("#discover-sidebar");
    const lastVisit = localStorage.getItem("lastVisit");

    if (!lastVisit) {
        discoverSidebar.innerHTML = "<p>Welcome! Let us know if you have any questions.";
    }
    else {
        let currentDate = Date.now();
        let timeDifference = currentDate - parseInt(lastVisit);
        let daysDifference = Math.floor(timeDifference / 86400000);

        if (daysDifference < 1) {
            discoverSidebar.innerHTML = "<p>Back so soon! Awesome!</p>";
        }
        else {
            discoverSidebar.innerHTML = `<p>You last visited ${daysDifference} ${(daysDifference === 1) ? "day" : "days"} ago.</p>`;
        }
    }

    localStorage.setItem("lastVisit", Date.now());
});