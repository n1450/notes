console.log("Hello World");
const input = document.getElementById("note");
const addButton = document.getElementById("add");
const list = document.getElementById("list");

addButton.addEventListener("click", handleButton);

function handleButton(){
    console.log(input.value);
    const item = document.createElement("li");
    item.innerText = input.value;

    list.appendChild(item);
    input.value = "";
}