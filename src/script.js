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
    document.getElementById('login').style.display = "none";
    document.getElementById('logout').style.display = "block";
}

function logOut() {
    document.querySelector(".profile__name").innerHTML = "Not logged In";
    document.querySelector(".profile__img").src = "assets/img/unlogged.png";
    document.getElementById('login').style.display = "block";
    document.getElementById('logout').style.display = "none";
}

console.log(document.querySelector('.profile__name').innerHTML)

function checkIfLoggedIn() {
    if (document.querySelector(".profile__name").innerHTML === "Not logged In") {
        // document.querySelector(".launch__client").disabled = true;
        // document.querySelector(".launch__client").style.display = 'none';
        console.log('lol');
    }
}

checkIfLoggedIn()