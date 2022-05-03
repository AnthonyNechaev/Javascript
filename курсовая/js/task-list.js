'use strict';

let tasks = JSON.parse(localStorage.getItem("tasks"));

function createList() {
if (tasks) {
    for (let i = 0; i < tasks.length; i++) {
        let newTask = document.createElement("div");
        newTask.id = `${i}`;
        newTask.innerHTML = 
        `
        <h3>${tasks[i].title}</h3>
        <p class="description">${tasks[i].description}</p>
        <p class="date">Выполнить к ${tasks[i].date}</p>
        `;
        document.querySelector(".task-list").append(newTask);
        newTask.addEventListener("click", selectTask);

        let menArr = tasks[i].men;
        if (menArr.length) {
            let menBlock = document.createElement("article");
            menBlock.innerText = `Участники: `;
            for (let man of menArr) {
                let newMan = document.createElement("p");
                newMan.innerText = `${man}`;
                menBlock.append(newMan);
            }
            newTask.append(menBlock);
        }
        
    }
} else {
    let message = document.createElement("p");
    message.innerText = "Текущих задач нет";
    document.querySelector(".task-list").append(message);
}
}


function deleteTask () {
    let items = document.querySelectorAll(".selected");
    for (let item of items) {
        item.remove();
        tasks.splice([item.id], 1);
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function selectTask () {
    this.classList.toggle("selected");
}

document.querySelector(".del").addEventListener("click", deleteTask);
createList();