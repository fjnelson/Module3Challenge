//source: https://github.com/w3collective/random-password-js
//setting variables
const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const sym = "!@#$%^&*_-+=";

const passTxt = document.getElementById("password");
const length = document.getElementById("length");
const Numbers = document.getElementById("numbers");
const Symbols = document.getElementById("symbols");
const lCase = document.getElementById("lowercase");

//generate password
const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", () => {
  let characters = char;
  Numbers.checked ? (characters += num) : "";
  Symbols.checked ? (characters += sym) : "";
  // lCase.checked ? (characters = characters.toLowerCase) : "";

  //keep active
  passTxt.value = generatePassword(length.value, characters);

  // if (lCase.checked) {
  // passTxt.value = generatePassword(length.value, characters.toLowerCase());
  // }
  // Else {
  // passTxt.value = generatePassword(length.value, characters);}
});

//password function
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  // if (lCase.checked) {
  //   return password.toLowerCase();
  // } else {
  //   return password;
  // }
  //keep active
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