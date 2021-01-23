var btnAdd = document.querySelector(".add-btn");
var inputAdd = document.querySelector(".add-item");
var ul = document.querySelector(".todo-wrapper");


function checkmarkOnclick () {
    var checkmark = document.querySelector(".todo-wrapper li:last-child i:first-child");
    var spanText = document.querySelector(".todo-wrapper li:last-child span");

    checkmark.addEventListener("click", function() {
        spanText.classList.toggle("done");
        checkmark.classList.toggle("fas");
        checkmark.classList.toggle("far");
        checkmark.classList.toggle("fa-square");
        checkmark.classList.toggle("fa-check-square");
    })
}

function createCheckmark () {
    var lastChildLi = document.querySelector(".todo-wrapper li:last-child");
    var checkmark = document.createElement("i");
    checkmark.setAttribute("class", "far fa-square far-checkmark");
    lastChildLi.prepend(checkmark);
}
function createDeleteButton () {
    var lastChildLi = document.querySelector(".todo-wrapper li:last-child");
    var deleteButton = document.createElement("i");
    deleteButton.setAttribute("class", "fas fa-trash-alt");
    lastChildLi.appendChild(deleteButton);
}


function removeElementOnclick () {
    var lastChildTrash = document.querySelector(".todo-wrapper li:last-child i:last-child");
    var lastChildLi = document.querySelector(".todo-wrapper li:last-child");
    lastChildTrash.addEventListener("click", function() {
        lastChildLi.remove();
    })
}


function createListElement() {
    var li = document.createElement("li");
    var span = document.createElement("span");

    span.appendChild(document.createTextNode(inputAdd.value)); 
    li.appendChild(span);
    ul.appendChild(li);
    inputAdd.value = "";

    createDeleteButton();
    createCheckmark();

    removeElementOnclick();
    checkmarkOnclick();
}
function isOnlyWhitespace() {
    return inputAdd.value.trim() === "";
}
function addListAfterClick () {
    if (!isOnlyWhitespace()) {
        createListElement();
    }
}
function addListAfterKeypress (event) {
    if (!isOnlyWhitespace() && event.key === "Enter") {
        createListElement();
    }
}

btnAdd.addEventListener("click", addListAfterClick)
inputAdd.addEventListener("keypress", addListAfterKeypress)




