loginForm.loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("privet");
  loginFormDiv.classList.add("hide");
  regFormDiv.classList.remove("hide");
  regFormDiv.classList.add("active1");
});
regForm.regButton.addEventListener("click", (event) => {
    event.preventDefault();
  });
  
