
//Model
const item = [
 //"note1"
 //"note2"
 //"note3"
]
//View
//see HTML
function buildLIItem(note){
const item = document.createElement("li");
item.textContent = note;
item.addEventListener("click", handleClickLIItem);
return item;
}

//Controller
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
        const item = buildLIItem("li");
        list.appendChild(item);
        notes.push(note);
        input.value = "";
        input.focus();

    }

}