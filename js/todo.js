const TODO_LIST_KEY = "todo-list";

/**
 * @typedef {{
 *      id:number,
 *      text:string
 * }} Todo
 */

/**
 * @type {HTMLFormElement}
 */
const todoForm = document.getElementById("todo-form");
/**
 * @type {HTMLInputElement}
 */
const todoInput = todoForm.querySelector("input");
/**
 * @type {HTMLUListElement}
 */
const todoList = document.getElementById("todo-list");

/**
 * @type {Todo[]}
 */
let todoArray = [];

/**
 * TODO form의 submit handler
 * @param {SubmitEvent} event 
 */
function handleTodoSubmit(event) {
    event.preventDefault();
    const inputValue = todoInput.value;
    todoInput.value = "";
    addTodo({
        id: todoArray.length + 1,
        text: inputValue
    });
}

/**
 * 
 * @param {PointerEvent} event 
 */
function handleClickTodoDelete(event) {
    /**
     * @type {HTMLButtonElement}
     */
    const target = event.target;
    /**
     * @type {HTMLLIElement}
     */
    const parent = target.parentElement;

    todoArray = todoArray.filter((todo) => {
        return Number.parseInt(parent.id) !== todo.id;
    });
    window.localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoArray));

    parent.remove();
}

/**
 * TODO 리스트에 TODO 추가하기.
 * 이러언
 * @param {Todo} value 
 */
function addTodo(value) {
    todoArray.push(value);
    window.localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todoArray));

    const todoLi = document.createElement("li");
    const todoSpan = document.createElement("span");
    const todoDeleteButton = document.createElement("button");

    todoLi.id = value.id;

    todoSpan.innerText = value.text;
    todoDeleteButton.innerText = "X";

    todoDeleteButton.addEventListener("click", handleClickTodoDelete);

    todoLi.appendChild(todoSpan);
    todoLi.appendChild(todoDeleteButton);

    todoList.appendChild(todoLi);
}

todoForm.addEventListener("submit", handleTodoSubmit);

const localTodoArray = window.localStorage.getItem(TODO_LIST_KEY);

if(localTodoArray) {
    /**
     * @type {Todo[]}
     */
    const parsed = JSON.parse(localTodoArray);

    parsed.forEach(addTodo);
}