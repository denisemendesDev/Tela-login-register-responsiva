const registerContainer = document.querySelector(".register__container"),
      loginContainer = document.querySelector(".login__container")

function login(){
  loginContainer.classList.remove("hidden")
  loginContainer.style.display="flex"

  registerContainer.classList.add("hidden")
  registerContainer.style.display = "none"
}

function register(){
  loginContainer.classList.add("hidden")
  loginContainer.style.display="none"

  registerContainer.classList.remove("hidden")
  registerContainer.style.display = "flex"
}