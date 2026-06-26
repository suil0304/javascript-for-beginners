// class name
const HIDDEN_CLASS_NAME = "hidden";

// localStorage
const USERNAME_KEY = "username";

// login
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");

// greetingie
const greeting = document.getElementById("greeting");

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