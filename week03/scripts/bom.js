const input = document.querySelector("#favchap")
const button = document.querySelector("button")
const list = document.querySelector("#list")

button.addEventListener('click', () => {
    if (input.value != "") {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        listItem.textContent = input.value;
        deleteButton.textContent = '❌';

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
        });

        input.focus();
        input.value = "";
    }
    else {
        input.focus();
        window.alert("Please enter a book and a chapter")
    }
});