import { HIDDEN_CLASS_NAME } from "./const.js";

// localStorage
const USERNAME_KEY = "username";

// login
/**
 * @type {HTMLFormElement}
 */
const loginForm = document.querySelector("#login-form");
/**
 * @type {HTMLInputElement}
 */
const loginInput = loginForm.querySelector("input");

// greetingie
/**
 * @type {HTMLHeadingElement}
 */
const greeting = document.querySelector("#greeting");

const savedLocalUsername = window.localStorage.getItem(USERNAME_KEY);

/**
 * submit handler
 * @param {SubmitEvent} event 
 */
function handleLoginSubmit(event) {
    event.preventDefault();

    const username = loginInput.value;

    window.localStorage.setItem(USERNAME_KEY, username);

    loginForm.classList.add(HIDDEN_CLASS_NAME);

    showGreeting(username);
}

/**
 * show show show greenchi
 * @param {string} username
 */
function showGreeting(username) {
    greeting.innerText = `Hello, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASS_NAME);
}

if(savedLocalUsername === null) {
    loginForm.addEventListener("submit", handleLoginSubmit);
    loginForm.classList.remove(HIDDEN_CLASS_NAME);
}
else {
    showGreeting(savedLocalUsername);
}