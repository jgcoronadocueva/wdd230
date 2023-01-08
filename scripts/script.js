const currentYear = document.querySelector("#currentYear");
const currentDate = new Date();
currentYear.innerHTML = currentDate.getFullYear();

const lastModifiedDate = document.querySelector("#lastModifiedDate");
const lastModif = new Date(document.lastModified);
lastModifiedDate.innerHTML = `Last updated: ${lastModif.toLocaleDateString(
  "en-US"
)} ${lastModif.toLocaleTimeString()}`;
