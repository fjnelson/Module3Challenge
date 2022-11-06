//source: https://github.com/w3collective/random-password-js
//source: https://github.com/jamierachael/Password-Generator
//https://owasp.org/www-community/password-special-characters

//setting variables
const CHAR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUM = "0123456789";
const SYM = "!@#$%^&*_-+=";

const PASSTXT = document.getElementById("password");
const LENGTH = document.getElementById("length");
const NUMBERS = document.getElementById("numbers");
const SYMBOLS = document.getElementById("symbols");
const LCASE = document.getElementById("lcletters");

//generate password button
const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", () => {
  let characters = CHAR;
  NUMBERS.checked ? (characters += NUM) : "";
  SYMBOLS.checked ? (characters += SYM) : "";
  // LCASE.checked ? (characters.toLowerCase()) : characters;
  if (LCASE.checked) {
    characters.toLowerCase();
  }

  //keep active
  PASSTXT.value = GENERATEPASSWORD(LENGTH.value, characters);
});

//password function
const GENERATEPASSWORD = (LENGTH, characters) => {
  // console.log(characters);
  let password = "";
  for (let i = 0; i < LENGTH; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

//copy button + alert
const COPYBTN = document.getElementById("copy");
COPYBTN.addEventListener("click", () => {
  PASSTXT.select();
  document.execCommand("copy");
  alert("Password Has Been Copied");
});

//reset button
const RESETBTN = document.getElementById("reset");
RESETBTN.addEventListener("click", () => {
  window.location.reload();
});

//generate password with prompt button
const GENERATEPROMPTBTN = document.getElementById("generatePrompt");
GENERATEPROMPTBTN.addEventListener("click", () => 
{
    var ent;
    var cnum;
    var csym;
    var cUpper;
    var character="";

    //start prompts
    ent = parseInt(prompt("Password must be between 8 and 128 characters"));
    if (!ent) {
      alert("This needs a value");
  } else if (ent < 8 || ent > 128) {
      ent = parseInt(prompt("enter between 8 and 128"));
    } else {
      cnum = confirm("numbers?");
      csym = confirm("special characters?");
      cUpper = confirm("Uppercase letters?");
  };

  if (!csym && !cnum && !cUpper) {
    character += character.toLowerCase();

  }
  if (csym){
    character += SYM;
  }

  if (cnum){
    character += NUM;
  }
 
  if (cUpper){
    character += character.toUpperCase();
  }

  if (csym && cnum){
    character += SYM + NUM;
  }

  if (csym && cUpper){
    character += character.toUpperCase() + SYM;
  }

  if (cnum && cUpper){
    character += character.toUpperCase() + NUM;
  }

  if (csym && cnum && cUpper){
    character += character.toUpperCase() + SYM + NUM;
  }

 const GENERATEPROMPTPASSWORD = (ent, character) => {
    let password = "";
    for (let i = 0; i < ent; i++) {
      password += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    return password;
  };
  PASSTXT.value = GENERATEPROMPTPASSWORD(ent.value, character);
  });