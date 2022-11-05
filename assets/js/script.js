//source: https://github.com/w3collective/random-password-js
//setting variables
const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const sym = "!@#$%^&*_-+=";

const passTxt = document.getElementById("password");
const length = document.getElementById("length");
const Numbers = document.getElementById("numbers");
const Symbols = document.getElementById("symbols");

//generate password
const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", () => {
  let characters = char;
  Numbers.checked ? (characters += num) : "";
  Symbols.checked ? (characters += sym) : "";
  passTxt.value = generatePassword(length.value, characters);
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
  passTxt.select();
  document.execCommand("copy");
  alert("Password Has Been Copied");
});

//reset button
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", () => {
  window.location.reload();
});