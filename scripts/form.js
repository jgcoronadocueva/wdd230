const password = document.querySelector("#password");
const confirmedPassword = document.querySelector("#confirmedPassword");
const message = document.querySelector("#message");

confirmedPassword.addEventListener("focusout", checkPassword);

function checkPassword() {
    if (confirmedPassword.value !== password.value) {
        message.textContent = "Passwords DO NOT MATCH!";
        message.style.color = "red";
        message.style.padding = ".5rem";
        message.style.visibility = "show";
        confirmedPassword.style.backgroundColor = "#fff0f3";
        confirmedPassword.value = "";
        confirmedPassword.focus();
    } else {
        message.style.display = "none";
        confirmedPassword.style.backgroundColor = "#fff";
        confirmedPassword.style.color = "#000";
    }
}

const rangevalue = document.querySelector("#ratingvalue");
const range = document.querySelector("#rating");

range.addEventListener("change", displayRatingValue);
range.addEventListener("input", displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}