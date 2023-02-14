var generateBtn = document.querySelector("#generate");

var lowerCharacters = 'abcdefjhijklmnopqrstuvwxyz';
var lowerArray = lowerCharacters.split('');
var randomLower = lowerArray[Math.floor(lowerArray.length * Math.random())];

var upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var upperArray = upperCharacters.split('');
var randomUpper = upperArray[Math.floor(upperArray.length * Math.random())];

var numericCharacters = '0123456789';
var numericArray = numericCharacters.split('');
var randomNumeric = numericArray[Math.floor(numericArray.length * Math.random())];

var specialCharacters = '!@#$%^&*()';
var specialArray = specialCharacters.split('');
var randomSpecial = specialArray[Math.floor(specialArray.length * Math.random())];


randomAll = {
  randomLower,
  randomUpper,
  randomNumeric,
  randomSpecial,
};

function generatePassword() {

  var passwordLengthPrompt = prompt("Please enter desired password length:", "8-128 characters.");

  if (passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
    alert("Please enter a valid password length (8-128 characters.)");
  } else {

    var password = '';

    var randomLower = confirm('Use lowercase letters?')
      if (randomLower) {
        password += randomAll.randomLower;
      }
    var randomUpper = confirm('Use uppercase letters?')
    if (randomUpper) {
      password += randomAll.randomUpper;
    }
    var randomNumeric = confirm('Use numbers?')
    if (randomNumeric) {
      password += randomAll.randomNumeric;
    }
    var randomSpecial = confirm('Use special characters?')
    if (randomSpecial) {
      password += randomAll.randomSpecial;
    }

    return password;
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
