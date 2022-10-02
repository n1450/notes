
const addButton = document.getElementById("add");
addButton.addEventListener("click", handleButton);

function handleButton(){
    const input = document.getElementById("text");
    const note = input.value;

    if(note){
        const list = document.getElementById("list");
        const item = document.getElementById("li");
        item.textContent = note;
        list.appendChild(item);
    }
}