// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCharacters = 'abcdefjhijklmnopqrstuvwxyz'
var lowerArray = lowerCharacters.split('')
var randomLower = lowerArray[Math.floor(lowerArray.length * Math.random())]

var upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var upperArray = upperCharacters.split('')
var randomUpper = upperArray[Math.floor(upperArray.length * Math.random())]

var numericCharacters = '0123456789'
var numericArray = numericCharacters.split('')
var randomNumeric = numericArray[Math.floor(numericArray.length * Math.random())]

var specialCharacters = '!@#$%^&*()[]{}/?-=+_<>~,.;:`\|"'
var specialArray = specialCharacters.split('')
var randomSpecial = specialArray[Math.floor(specialArray.length * Math.random())]

var allCharacters = lowerArray + upperArray + numericArray + specialArray



var randomAll = allCharacters[Math.floor(allCharacters.length * Math.random())]



function generatePassword() {

}




function writePassword() {
  generateBtn.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Stores user response in variable
var tagName = prompt("Please enter your desired password length, in number of characters:", "8-128");
var 

if (tagName < 8 || tagName > 128) {
  alert("Please enter a valid password length. (8-128 Characters.)");
} else {
  var characterTypeSelector = append(randomLower, randomUpper, randomNumeric, randomSpecial)





}



console.log(lowerArray);
console.log(upperArray);
console.log(numericArray);
console.log(specialArray);
console.log(randomLower);
console.log(randomUpper);
console.log(randomNumeric);
console.log(allCharacters);

console.log(randomAll);

//   Pseudo Code

// 1. Create a functional button that initiates the password criteria prompts.

// 2. Create append to designate password length.

// 3. Create a second append to designate character types to include in the password.

//   3.1. Create an array each for lowercase, uppercase, numeric, and special characters (4 total.)
//   3.2. Create a randomizer to pick and display at least one character from the arrays selected in 3.1.

// 4. Print created password. 

// 

// Stores user response in variable
// var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");

// if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
//   alert("please enter a valid tag");
// } else {
//   // Creates element based on tag entered by user
//   var tag = document.createElement(tagName);

//   // Adds text content to created tag
//   tag.textContent = "This was made via prompts. It's a " + tagName + ".";
  
//   // Appends tag as child of document body
//   document.body.appendChild(tag);
// }

// var nextTag = confirm("Would you like to add another tag?");

// if (nextTag === true) {
//   var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
//   if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
//     alert("please enter a valid tag");
//   } else {
//     var secondTag = document.createElement(secondTagName);
//     secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
//     document.body.appendChild(secondTag);
//   }
// }
