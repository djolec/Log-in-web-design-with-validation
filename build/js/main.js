let loginbtn = document.getElementById("login-btn");
let registerbtn = document.getElementById("register-btn");
let btn = document.getElementById("btn");
let loginForm = document.getElementById("logging");
let regForm = document.getElementById("register");

let logSubmitBtn = document.getElementById("log-submit-btn");
let userID = document.getElementById("userid");
let loginUN = document.getElementById("loginUN");

let password = document.getElementById("password");
let loginPW = document.getElementById("loginPW");
let unWrong = document.getElementById("unWrong");
let unRight = document.getElementById("unRight");
let unWrong1 = document.getElementById("unWrong1");
let unRight1 = document.getElementById("unRight1");

userID.addEventListener("keyup", (event) => {
  let errorMessage = [];
  if (userID.value.length < 6 || userID.value.length > 14) {
    errorMessage.push("Username must be between 6 and 14 characters");
    loginUN.textContent = errorMessage[0];
    loginUN.style.color = "#ff105f";
    loginUN.style.visibility = "visible";
    userID.style.borderBottom = "1px solid #ff105f";
    unWrong.style.display = "block";
    unRight.style.visibility = "none";
  } else if (userID.value.length > 5 && userID.value.length < 15) {
    errorMessage.push("Username is valid");
    loginUN.textContent = errorMessage[0];
    loginUN.style.color = "#169f3f";
    userID.style.borderBottom = "1px solid #169f3f";
    unWrong.style.display = "none";
    unRight.style.display = "block";
  }
});

password.addEventListener("keyup", (event) => {
  let errorMessage1 = [];
  if (password.value.length < 6 || password.value.length > 14) {
    errorMessage1.push("Password must be between 6 and 14 characters");
    loginPW.textContent = errorMessage1[0];
    loginPW.style.color = "#ff105f";
    loginPW.style.visibility = "visible";
    password.style.borderBottom = "1px solid #ff105f";
    unWrong1.style.display = "block";
    unRight1.style.visibility = "none";
  } else if (password.value.length > 5 && password.value.length < 15) {
    errorMessage1.push("Password is valid");
    loginPW.textContent = errorMessage1[0];
    loginPW.style.color = "#169f3f";
    password.style.borderBottom = "1px solid #169f3f";
    unWrong1.style.display = "none";
    unRight1.style.display = "block";
  }
});

registerbtn.addEventListener("click", (event) => {
  function showReg() {
    regForm.style.left = "0";
    regForm.style.opacity = "1";
    loginForm.style.left = "-450px";
    loginForm.style.opacity = "0";
    btn.style.left = "110px";
  }
  showReg();
});

loginbtn.addEventListener("click", (event) => {
  function showLogIn() {
    regForm.style.left = "450px";
    regForm.style.opacity = "0";
    loginForm.style.left = "0";
    loginForm.style.opacity = "1";
    btn.style.left = "0";
  }
  showLogIn();
});

loginForm.addEventListener("submit", (event) => {
  let unmessages = [];
  let pwmessages = [];

  if (password.value === "" || password.value === null) {
    pwmessages.push("Password is required");
    loginPW.textContent = pwmessages[0];
    loginPW.style.color = "#ff105f";
    loginPW.style.visibility = "visible";
    password.style.borderBottom = "1px solid #ff105f";
    unWrong1.style.display = "block";
    console.log(pwmessages[0]);
  }
  if (userID.value === "" || userID.value === null) {
    unmessages.push("Username is required");
    loginUN.textContent = unmessages[0];
    loginUN.style.color = "#ff105f";
    loginUN.style.visibility = "visible";
    userID.style.borderBottom = "1px solid #ff105f";
    unWrong.style.display = "block";
    console.log(unmessages[0]);
  }
  if (password.value.length < 6 || password.value.length > 14) {
    pwmessages.push("Password must be between 6 and 14 characters");
    loginPW.textContent = pwmessages[0];
    loginUN.style.visibility = "visible";
  }
  if (userID.value.length < 6 || userID.value.length > 14) {
    unmessages.push("Username must be between 6 and 14 characters");
    loginUN.textContent = unmessages[0];
    loginUN.style.visibility = "visible";
  }
  if (unmessages.length > 0 || pwmessages.length > 0) {
    event.preventDefault();
  }
});
