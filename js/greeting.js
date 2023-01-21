const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input');
const loginButton = document.querySelector('#login-form button');
const greetingP= document.querySelector('#greeting')

const greetingPF = (USERNAME) =>{
    greetingP.classList.remove('hidden')
    greetingP.innerText = `Hello ${USERNAME}`}

const onLoginBtnClick = (event) => {
    event.preventDefault();
    const username = loginInput.value
    loginForm.classList.add('hidden')
    greetingPF(username);
    localStorage.setItem('username',username)
}

loginButton.addEventListener('click', onLoginBtnClick)

const savedUsername = localStorage.getItem('username')

if(savedUsername == null){
    loginForm.classList.remove('hidden')

} else{
    greetingPF(savedUsername);
}

