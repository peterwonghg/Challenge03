// DOM Elements
let characterLength = 8;
let selectedArr = [];

const lowerCaseArr =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseArr =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numberArr =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbolArr =['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', ',', '.', '<', '>', '?', '/', '~', '+'];



// Assignment Code
const generateBtn = document.querySelector("#generate");



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input - Task ac07jc01
function writePassword() {
  let selectedPrompts = getPrompts();
  let passwordText = document.querySelector("#password");

  if (selectedPrompts) {
    let newPassword = generatePassword();
    passwordText.value = newPassword;
  } 
  else {
    passwordText.value = "";
  }
}



// Create the generate password function - Task ac06jc01
function generatePassword() {

  let password = "";
  for(let i = 0; i < characterLength; i++) {
    let randomIndex = Math.floor(Math.random() * selectedArr.length);
    password = password + selectedArr[randomIndex];
  }
  return password;
}


// Create prompts functions with validation requirements  - Task ac01jc01
function getPrompts() {
  selectedArr = [];
// Password Length prompt Task ac02jc01 + Task ac03jc01
  // Validation to handle NaN, characterLength < 8 and characterLength > 128 - Task ac05jc01
  characterLength = parseInt(prompt("Enter number of password characters between 8-128"));
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a NUMBER between 8-128, Please Try Again.");
    return false;
  }
  
  // Using Window Confirm Method to return a Boolean with TRUE when OK is selected and FALSE when CANCEL is selected to include or exclude the 4 character types respectively
  // Include or Not To Include Lower Case Characters - Task ac02jc02
  if(confirm("OK to INCLUDE Lowercase Characters, CANCEL to EXCLUDE")) {
    selectedArr = selectedArr.concat(lowerCaseArr);
  }
  // Include or Not To Include Upper Case Characters - Task ac02jc03
  if(confirm("OK to INCLUDE Uppercase Characters, CANCEL to EXCLUDE")) {
    selectedArr = selectedArr.concat(upperCaseArr);
  }
  // Include or Not To Include Numbers Characters - Task ac02jc04
  if(confirm("OK to INCLUDE Numbers, CANCEL to EXCLUDE")) {
    selectedArr = selectedArr.concat(numberArr);
  }
  // Include or Not To Include Special Characters or Symbols Characters - Task ac02jc05
  if(confirm("OK to INCLUDE Symbols Characters, CANCEL to EXCLUDE")) {
    selectedArr = selectedArr.concat(symbolArr);
  }

  // Validation to choose at least ONE character type - Task ac05jc02
  if(selectedArr.length === 0) {
    alert("Please Try Again and choose at least ONE Character type.");
    return getPrompts();
  }
  return true;
}
