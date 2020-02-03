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
var num =['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//create an array of special characters
var chara =[
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
]

//create an array of upper case letters
var upper = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//create an array of lower case letters
var lower =[
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// create counter 
var counter = 0;

// check for numbers
var numbers = confirm("Click ok to include numbers in your password.");
if(numbers){
  counter++;
}

// check for special character
var specialchar = confirm("Click ok to include special characters in your password.");
if(specialchar){
  counter++;
}

// check for upper case
var uppercase = confirm("Click ok to include uppercase letters in your password.");
if(uppercase){
  counter++;
}

// check for lower case
var lowercase = confirm("Click ok to include lowercase letters in your password.");
if(lowercase){
  counter++;
}




// create an temp array to hold randomly generated values
var temp=[];



// Determine position of temp array 
var position =0;

// Create function to randomly generate a number, special character, uppercase and lowercase base on user's choices
function generateNextValue(){
  // generate number between 0-9
  if(numbers){
    var value = Math.floor(Math.random()*num.length);
    temp[position] = num[value];
    position++;
  }
  // generate special character
  if(specialchar){
    var value = Math.floor(Math.random()*chara.length);
    temp[position] = chara[value];
    position++;
  }
  //generate upper case letter
  if(uppercase){
    var value = Math.floor(Math.random()*upper.length);
    temp[position] = upper[value];
    position++;
  }
  // generate lower case letter
  if(lowercase){
    var value = Math.floor(Math.random()*lower.length);
    temp[position] = lower[value];
    position++;
  }
  return temp;
}
// Randomly select a value inside the temp array
//var selector= Math.floor(Math.random())*counter;
//var password= password.concat(temp[selector]);
//console.log(password);

temp=generateNextValue();
console.log(temp);
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);
console.log(children)

//Test codes
console.log(counter);
var password =[];
for(var i = 0; i<10; i++){
  
  var selector= Math.floor(Math.random()*counter);
  var next= temp[selector];
  console.log("selector is" +selector)
  console.log("next is " +next)
  
  password= password+next;
  console.log(password);
}