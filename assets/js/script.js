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
const LCASE = document.getElementById("lowercase");

//generate password button
const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", () => {
  let characters = CHAR;
  NUMBERS.checked ? (characters += NUM) : "";
  SYMBOLS.checked ? (characters += SYM) : "";
  // LCASE.checked ? (characters += characters()) : "";

  //keep active
  PASSTXT.value = GENERATEPASSWORD(LENGTH.value, characters);

  // if (LCASE.checked) {
  // PASSTXT.value = GENERATEPASSWORD(length.value, characters.toLowerCase());
  // }
  // Else {
  // PASSTXT.value = GENERATEPASSWORD(length.value, characters);}
});

//password function
const GENERATEPASSWORD = (LENGTH, characters) => {
  let password = "";
  for (let i = 0; i < LENGTH; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  // if (LCASE.checked) {
  //   return toLowerCase(password);
  // } else {
  //   return password;
  // }
  //keep active
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
    var choiceInput;
    var cnum;
    var csym;
    var cUpper;

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
    choiceInput = alert("choose something");

  }
  else if (csym && cnum && cUpper) {

    choiceInput.toUpperCase() = character.concat(NUM, SYM);
  }
  else if (csym && cnum) {
    choiceInput = character.concat(NUM, SYM);
  }
  else if (csym && cUpper) {
    choiceInput.toUpperCase() = character.concat(SYM);
  }
  else if (cnum && cUpper) {
    choiceInput.toUpperCase() = NUM.concat(NUM);
  }
 else if (csym) {
    choiceInput = character.concat(SYM);
  }  
  else if (cnum) {
    choiceInput = NUM;
  }
  // Created space variable to fill uppercase conversion
  else if (cUpper) {
    choiceInput.toUpperCase() = space.concat();
  };

  alert(choiceInput);
  GENERATEPASSWORD();

  var ps = password.join("");
  GENERATEPASSWORD(ps);
  return ps;

  function UserInput(ps) {
    document.getElementById("password").textContent = ps;

  }

  });