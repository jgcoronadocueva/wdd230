const currentYear = document.querySelector("#currentYear");
const currentDate = new Date();
currentYear.innerHTML = currentDate.getFullYear();

const lastModifiedDate = document.querySelector("#lastModifiedDate");
lastModifiedDate.innerHTML = `Last updated: ${document.lastModified}`;
