// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Create an array of numbers

//create an array of special characters

//create an array of upper case letters

//create an array of lower case letters


// Create a number generator to to randomly select number, special character, upper case or lower case
function generatePassword(){
  var select = Math.floor(Math.random()*4+1);
  console.log(select);
  // generate number between 0-9
  if(select === 1){

  }
  // generate special character
  else if(select === 2){

  }
  //generate upper case letter
  else if(select === 3){

  }
  // generate lower case letter
  else{

  }
}

