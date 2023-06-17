

let usr = JSON.parse(localStorage.getItem("usr"))||[]
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

let nameInp = document.getElementById("name");
let emailInp = document.getElementById("email");
let pws = document.getElementById("password");
let signupBtn = document.querySelector("#signupBtn");
let signinBtn = document.querySelector("#signinBtn");
let form1 = document.getElementById("form1")
let form2 = document.getElementById("form2")

// signupBtn

form1.addEventListener("submit", (e) => {

    e.preventDefault();
    let obj = {
        userName: nameInp.value,
        email: emailInp.value,
        password: pws.value
    }
    usr.push(obj)
        // registerUser(userName, email, password);
    alert("User Register");
    console.log("hello")
    localStorage.setItem("usr", JSON.stringify(usr))
})



form2.addEventListener("submit", (e) => {
    e.preventDefault()
    var flag = false;
    let loginpwd = document.getElementById("password-log");
    let loginmail = document.getElementById("email-log")
    for (let i = 0; i < usr.length; i++) {
        // console.log(usr[i].email, usr[i].password, "", loginpwd.value, loginpwd.value)
        if (usr[i].email == loginmail.value && usr[i].password == loginpwd.value) {
            flag = true
        }

    }

    if (flag == true) {

        alert("login succesful")
        window.open("./AdminDashbord.html")
    } else {
        console.log(loginmail.value, loginpwd.value)
        alert("wrong email or password")
    }

})
