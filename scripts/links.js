const baseURL = "https://jgcoronadocueva.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;
const linkMenu = document.querySelector("#link-menu");

async function apiFetch() {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data);
        }

        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayLinks(weeks) {

    weeks.weeks.forEach((week) => {
        let listElement = document.createElement("li");
        listElement.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            let linkElement = document.createElement("a");
            linkElement.setAttribute('href', link.url);
            if (index < week.links.length - 1) {
                linkElement.textContent = `${link.title} | `;
            }
            else {
                linkElement.textContent = `${link.title}`;
            };

            listElement.appendChild(linkElement);
        });

        linkMenu.appendChild(listElement);

    });
}

apiFetch();