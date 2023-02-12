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

var specialCharacters = '!@#$%^&*()[]{}/?-=+_<>~,.;:`\|"';
var specialArray = specialCharacters.split('');
var randomSpecial = specialArray[Math.floor(specialArray.length * Math.random())];

randomArray =
  randomLower,
  randomUpper,
  randomNumeric,
  randomSpecial;

function generatePassword() {

  var randomAll = '';

  var passwordLength = prompt("Please enter desired password length:", "8-128 characters.");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length (8-128 characters.)");
  } else {
    var randomLower = confirm('Use lowercase letters?')
      if (randomLower) {
        randomAll += randomArray.randomLower;
      }
    var randomUpper = confirm('Use uppercase letters?')
    if (randomUpper) {
      randomAll += randomArray.randomUpper;
    }
    var randomNumeric = confirm('Use numbers?')
    if (randomNumeric) {
      randomAll += randomArray.randomNumeric;
    }
    var randomSpecial = confirm('Use special characters?')
    if (randomSpecial) {
      randomAll += randomArray.randomSpecial;
    }

    var password = ''; {
      for (var i = 0, i < passwordLength, i++);
      password += randomArray;
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

console.log(generatePassword())
