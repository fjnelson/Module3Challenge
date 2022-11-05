//source: https://github.com/w3collective/random-password-js
//setting variables
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const passwordTxt = document.getElementById("password");
const length = document.getElementById("length");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");

//generate password
generateBtn.addEventListener("click", () => {
  let characters = alpha;
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  passwordTxt.value = generatePassword(length.value, characters);
});

//password function
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

//copy button + alert
const copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
  alert("Password Copied");
});

//reset button
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
  window.location.reload();
});