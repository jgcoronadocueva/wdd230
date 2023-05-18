const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", () => {
  if (input.value != "") {
    
    const bookChapter = input.value;
    const listItem = document.createElement("li");
    const deleteBtn = document.createElement("button");
    listItem.textContent = bookChapter;
    deleteBtn.textContent = "❌";
    deleteBtn.setAttribute('aria-label', 'Remove Alma 5')
    listItem.appendChild(deleteBtn);
    list.appendChild(listItem);

    deleteBtn.addEventListener("click", () => {
      list.removeChild(listItem);
    });

    input.focus();
    input.value = "";
  }
});
