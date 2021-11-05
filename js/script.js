"use strict";

//todo-control
//header-input
//todo-list
//todo-completed

const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector(".header-input")
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')

let toDoData = [];
todoCompleted.innerHTML = '';                                                                    // очищаем поле
todoList.innerHTML = '';


const render = function () {


    if (toDoData === null) {
        toDoData = [];
    }

    todoCompleted.innerHTML = '';
    todoList.innerHTML = '';

    toDoData.forEach(function (item) {                                                               //перебор
        const li = document.createElement('li');                                             //создаем li
        li.classList.add("todo-item");                                                              // добавляем класс
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>'

        if (item.completed) {
            todoCompleted.append(li)
        } else {
            todoList.append(li)
        }


        li.querySelector(".todo-complete").addEventListener('click', function () {
            item.completed = !item.completed;                                                           // присваиваем выполненному = невыполненное
            render();                                                                                   // перезапускаем
        })


        li.querySelector(".todo-remove").addEventListener('click', function () {
            li.remove();                                                                                    // удаляем созданный li
            localStorage.setItem("toDoData", JSON.stringify(toDoData));

            //      localStorage.clear();

        })

        if (toDoData.length >= 1) {
            localStorage.setItem("toDoData", JSON.stringify(toDoData));                            //конвертируем массив в JSON и сохраняем его локально
        }
    })
}


todoControl.addEventListener("submit", function (e) {
    e.preventDefault();


    const newToDo = {                                                                                    // создаем новый обьект
        text: headerInput.value,
        completed: false
    }

    if (headerInput.value !== '') {
        toDoData.push(newToDo);                                                                             // пушаем новый обек
    }

    headerInput.value = ''
    render();

})

toDoData = localStorage.getItem("toDoData")
toDoData = JSON.parse(toDoData)                                                                   //конвертируем обратно JSON в массив
render();





































































//
// function addToLocalStorage(toDoData) {
//     // conver the array to string then store it.
//     localStorage.setItem("toDoData", JSON.stringify(toDoData));
//     // render them to screen
//     render(toDoData);
// }
//
// function getFromLocalStorage() {
//     const reference = localStorage.getItem("toDoData");
//     // if reference exists
//     if (reference) {
//         // converts back to array and store it in todoData array
//         toDoData = JSON.parse(reference);
//         render(toDoData);
//     }
// }
// getFromLocalStorage();





