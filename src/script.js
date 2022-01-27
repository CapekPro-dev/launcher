const { ipcRenderer } = require("electron");
const ipc = ipcRenderer;

function minimizeApp() {
    ipc.send("minimizeApp");
}

function closeApp() {
    ipc.send("closeApp");
}

function logIn() {
    document.querySelector(".profile__name").innerHTML = "CapekPro";
    document.querySelector(".profile__img").src = "assets/img/capekpro.png";
}

function logOut() {
    document.querySelector(".profile__name").innerHTML = "Not logged In";
    document.querySelector(".profile__img").src = "assets/img/unlogged.png";
}

// function checkIfLoggedIn() {
//     if (document.querySelector(".profile__name") === "Not logged In") {
//         // document.querySelector(".launch__client").disabled = true;
//         document.querySelector(".launch__client").style.filter = 'blur(10px)';
//     }
// }

// setInterval(checkIfLoggedIn(), 1000);