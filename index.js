let addUserFormEl = document.getElementById("adminLoginPage");
let nameEl = document.getElementById("name");
let passwordEl = document.getElementById("password");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");
let loginEl=document.getElementById("updateBtn");


addUserFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
});

passwordEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        passwordErrMsgEl.textContent = "Required*";
    } else {
        passwordErrMsgEl.textContent = "";
    }
});

function LoginBtn(event) {
    event.preventDefault();

    // Your login logic here (e.g., validate and then navigate)
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (name === "Ravindra" && password === "8866") {
        window.location.href = "index2.html"; // Or any page
    } else {
        document.getElementById("nameErrMsg").textContent = "Invalid credentials";
    }
}

function LogOut(event) {
    event.preventDefault();
    window.location.href = "index.html"; // Or any page
}
