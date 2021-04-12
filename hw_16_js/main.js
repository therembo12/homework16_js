// console.log(loginSignButton)
loginSignButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("privet");
  loginFormDiv.classList.add("hide");
  regFormDiv.classList.remove("hide");
  regFormDiv.classList.add("active");
});
 let baseData = []
regForm.signRegButton.addEventListener("click", (event) => {
    event.preventDefault();
      baseData = userReg(regName.value,regEmail.value,regLogin.value,regPassword.value)
      console.log(baseData)
      window.localStorage.setItem(`${baseData.login}`,`${JSON.stringify(baseData)}`)
      
    window.localStorage.setItem('name','Sanishua')
  });
function userReg(name,email,login,password){
  return{
    name:name,
    email:email,
    login:login,
    password:password
  } 
}