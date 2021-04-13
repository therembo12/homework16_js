loginSignButton.addEventListener("click", (event) => {
  event.preventDefault();
  loginFormDiv.classList.add("hide");
  regFormDiv.classList.remove("hide");
  regFormDiv.classList.add("active");
});
let baseData;
regForm.signRegButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (regName.value.trim() == "") {
    alert("Enter name");
  } else if (regLogin.value.trim().length < 4) {
    alert("Login must be longer");
  } else if (regPassword.value.trim().length <= 3) {
    alert("Password must be longer");
  } else if (
    regEmail.value.length <= 6 ||
    !(regEmail.value.trim().includes("@")) ||
    !(regEmail.value.trim().includes("."))
  ) {
    alert("Enter correct Email");
  } else if (
    regLogin.value == window.localStorage.getItem(`${regLogin.value}`)
  ) {
    alert(`Login ${regLogin.value} is exist`);
  } else {
    baseData = userReg(
      regName.value,
      regEmail.value,
      regLogin.value,
      regPassword.value
    );
    window.localStorage.setItem(
      `${baseData.login}`,
      `${JSON.stringify(baseData)}`
    );
    loginForm.login.value = regLogin.value;
    loginForm.password.value = regPassword.value;
    regFormDiv.classList.remove("active");
    regFormDiv.classList.add("hide");
    loginFormDiv.classList.remove("hide");
    loginFormDiv.classList.add("active");
  }
});
loginButton.addEventListener("click", (event) => {
  let temp = JSON.parse(
    window.localStorage.getItem(`${loginForm.login.value}`)
  );
  if (
    temp.password != loginForm.password.value ||
    loginForm.login.value == ""
  ) {
    alert("Wrong DATA");
  } else {
    loginButton.href = "./page1.html";
    window.localStorage.setItem("ticket", `${JSON.stringify(temp)}`);
  }
});
regButton.addEventListener("click", () => {
  console.log(regName.value.trim().length);
  if (
    regName.value.trim().length == 0 &&
    regEmail.value.trim().length == 0 &&
    regLogin.value.trim().length == 0 &&
    regPassword.value.trim().length == 0
  ) {
    regFormDiv.classList.remove("active");
    regFormDiv.classList.add("hide");
    loginFormDiv.classList.remove("hide");
    loginFormDiv.classList.add("active");
  } else if (regName.value.trim() == "") {
    alert("Enter name");
  } else if (regLogin.value.trim().length < 4) {
    alert("Login must be longer");
  } else if (regPassword.value.trim().length <= 3) {
    alert("Password must be longer");
  } else if (
    regEmail.value.trim().length <= 6 ||
    !regEmail.value.trim().includes("@") ||
    !regEmail.value.trim().includes(".")
  ) {
    alert("Enter correct Email");
  } else if (
    regLogin.value == window.localStorage.getItem(`${regLogin.value}`)
  ) {
    alert(`Login ${regLogin.value} is exist`);
  } else {
    baseData = userReg(
      regName.value,
      regEmail.value,
      regLogin.value,
      regPassword.value
    );
    window.localStorage.setItem(
      `${baseData.login}`,
      `${JSON.stringify(baseData)}`
    );
    window.localStorage.setItem("ticket", `${JSON.stringify(baseData)}`);

    regButton.href = "./page1.html";
  }
});
function userReg(name, email, login, password) {
  return {
    name: name,
    email: email,
    login: login,
    password: password,
  };
}

// if (
//   regName.value != "" &&
//   regLogin.value.length >= 4 &&
//   regPassword.value.length > 3 &&
//   regEmail.value.length > 6 &&
//   regEmail.value.includes("@") &&
//   regEmail.value.includes(".") &&
//   regLogin.value != window.localStorage.getItem(`${regLogin.value}`)
// ) {
//   baseData = userReg(
//     regName.value,
//     regEmail.value,
//     regLogin.value,
//     regPassword.value
//   );
//   window.localStorage.setItem(
//     `${baseData.login}`,
//     `${JSON.stringify(baseData)}`
//   );
//   window.localStorage.setItem("ticket", `${JSON.stringify(baseData)}`);

//   regButton.href = "./page1.html";
