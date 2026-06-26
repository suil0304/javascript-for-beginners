/**
 * @type {HTMLHeadingElement}
 */
const clock = document.querySelector("#clock");

function setClock() {
    const date = new Date();

    const hour = String(date.getHours());
    const minute = String(date.getMinutes());
    const second = String(date.getSeconds());

    clock.innerText = `${hour.padStart(2, "0")}:${minute.padStart(2, "0")}:${second.padStart(2, "0")}`;
}

setClock()
setInterval(setClock, 1000);