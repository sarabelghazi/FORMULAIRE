let button = document.querySelector("button");
let error = document.querySelector(".error");
let nom = document.querySelector("#fname");
let form = document.querySelector("form");
let email = document.querySelector("#email");
let pwd = document.querySelector("#password");
let prénom = document.querySelector("#lname");
let Cpassword = document.querySelector("#Cpassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (nom.value.length <= 2) {
    error.innerText = "Nom invalid";
    error.classList.add("text-danger");
  } else if (prénom.value.length <= 2) {
    let error = document.querySelector(".error1");
    error.innerText = "ce champ est requis";
    error.classList.add("text-danger");
  } else if (email.value.length == 0) {
    let error = document.querySelector(".error2");
    error.innerText = "ce champ est requis";
    error.classList.add("text-danger");
  } else if (pwd.value.length <= 6) {
    let error = document.querySelector(".error3");
    error.innerText = "au moins 6 chiffres ou caractères";
    error.classList.add("text-danger");
  } else if (Cpassword.value.length <= 6) {
    let error = document.querySelector(".error4");
    error.innerText = "au moins 6 chiffres ou caractères";
    error.classList.add("text-danger");
  }
});


