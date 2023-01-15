var loginButton = document.getElementById("show-login-button");
var loginPanel = document.getElementById("loginPanel");
var regButton = document.getElementById("show-register-button");
var register = document.getElementById("registerPanel");

register.style.display = "block";
register.style.display = "none";
loginPanel.style.display = "block";
loginPanel.style.display = "none";

function showLogin() {
    if (register.style.display === "block" && loginPanel.style.display === "none"){
        register.style.display = "none";
        loginPanel.style.display = "block";
    } else if (loginPanel.style.display === "none"){
        loginPanel.style.display = "block";
    } else {
        loginPanel.style.display = "none"
    }
}

function showRegister() {
    if (loginPanel.style.display === "block" && register.style.display === "none"){
        loginPanel.style.display = "none";
        register.style.display = "block";
    } else if (register.style.display === "none"){
        register.style.display = "block";
    } else {
        register.style.display = "none"
    }
}

loginButton.addEventListener("click", showLogin);
regButton.addEventListener("click", showRegister);

function editElement(id) {
    var ownElement = document.getElementById(id);
    ownElement.setAttribute("contenteditable", "");
    ownElement.style.borderStyle = "dotted";
}

for (let i = 1; i <= 35; i++) {
    var editter = document.getElementById(`edit-${i}`);
    if (editter) {
        editter.addEventListener("click", function () {
            editElement(`editable-${i}`);
        });
    }
}