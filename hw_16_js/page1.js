let temp = JSON.parse(window.localStorage.getItem("ticket"));
resName.value = temp.name.trim()
resEmail.value = temp.email.trim()
resPassword.value = temp.password.trim()
resLogin.value = temp.login.trim()
word.textContent = `Hello, ${temp.name}`
roundL.textContent = `${(temp.name.trim()[0]).toUpperCase()}`
round.addEventListener('click', ()=>{
    overlay.classList.add('show')
})
closeRf.addEventListener('click', ()=>{
    overlay.classList.remove('show')
})