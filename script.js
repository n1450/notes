document.addEventListener("DOMContentLoaded", function(){
const button = document.getElementById("add");
button.addEventListener("click", handleClick);
const input = document.getElementById("text");
input.getEventListener("keydown", handleKeyDown);
}

function handleClick(){
    add();
}

function handleKeyDown(event){
if(event.key === "Enter"){
add();
}

function handleClickLIItem(event){
const list = document.getElementById("list");
list.removeChild(event.target);
}

function add(){
const input = document.getElementById("text");
    const note = input.value;

    if(note){
        const list = document.getElementById("list");
        const item = document.getElementById("li");
        item.textContent = note;
        item.addEventListener("click", handleClickLIItem);
        list.appendChild(item);
        input.value = "";
        input.focus();

    }

}