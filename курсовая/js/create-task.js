'use strict';

function addTask (event) {
    event.preventDefault();
    let title = this.elements.title;
    title = title.value;
    let description = this.elements.description.value;
    let date = this.elements.date.value;
    let men = [];
    let menArr = document.getElementsByName("man");
    for (let man of menArr) {
        if (man) men.push(man.value);
    }
    
    if (!title) return;
    if (errorTitle || errorDate) return;

    let task = {title, description, date, men};
    let tasks = localStorage.getItem("tasks");
    if (tasks) tasks = JSON.parse(tasks);
    else tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.querySelector(".success").innerText = "Задача была успешно добавлена";
}

let errorTitle, errorDate;

document.forms["create-task"]
    .elements.title
    .addEventListener("input", function () {
       if (this.validity.valueMissing || this.validity.tooLong || this.validity.tooShort) {
           document.querySelector("span.title").innerText = "Значение должно быть в диапазоне от 3 до 20 символов";
           errorTitle = true;
           return;
       }
        document.querySelector("span.title").innerText = "";
        errorTitle = false;
    });

document.forms["create-task"]
    .elements.date
    .addEventListener("input", function () {
        let nowDate = Date.now();
        let userDate = Date.parse(this.value);
        
        if (!userDate) {
            document.querySelector("span.date").innerText = "Дата должна иметь формат YYYY-MM-DD";
            errorDate = true;
            return;
        }
        if (userDate < nowDate) {
            document.querySelector("span.date").innerText = "Дата не может быть в прошлом";
            errorDate = true;
            return;
        }
        document.querySelector("span.date").innerText = "";
        errorDate = false;
    });

document.forms["create-task"].addEventListener("submit", addTask);

function addMan (event) {
    event.preventDefault();
    let newMan = document.createElement("div");
    newMan.innerHTML = 
    `
    <input type="text" name="man" placeholder="Введите имя участника"><button class="remove">Удалить участника</button>
    `;
    document.getElementById("man-input").append(newMan);
    let btns = document.querySelectorAll(".remove");
    for (let btn of btns) {
        btn.addEventListener("click", removeMan);
    }
}

function removeMan () {
    this.parentNode.remove();
}

document.getElementById("man").addEventListener("click", addMan);