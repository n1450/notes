
const addButton = document.getElementById("add");
addButton.addEventListener("click", handleClick);

const input = document.getElementById("text");
input.addEventListener("keydown", handleKeyDown);

function handleClick(){
    add();
}

function handleKeyDown(event){
if(event.key === "Enter"){
add();
}

function add(){
const input = document.getElementById("text");
    const note = input.value;

    if(note){
        const list = document.getElementById("list");
        const item = document.getElementById("li");
        item.textContent = note;
        list.appendChild(item);
        input.value = "";
        input.focus();

    }
}