var generateBtn = document.querySelector("#generate");

// var lowerCharacters = 'abcdefjhijklmnopqrstuvwxyz';
// var lowerArray = lowerCharacters.split('');
// var randomLower = lowerArray[Math.floor(lowerArray.length * Math.random())];

// var upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var upperArray = upperCharacters.split('');
// var randomUpper = upperArray[Math.floor(upperArray.length * Math.random())];

// var numericCharacters = '0123456789';
// var numericArray = numericCharacters.split('');
// var randomNumeric = numericArray[Math.floor(numericArray.length * Math.random())];

// var specialCharacters = '!@#$%^&*()[]{}/?-=+_<>~,.;:`\|"';
// var specialArray = specialCharacters.split('');
// var randomSpecial = specialArray[Math.floor(specialArray.length * Math.random())];

// randomArray = '';
//   lowerCharacters,
//   upperCharacters,
//   numericCharacters,
//   specialCharacters;

allCharacters = {
  lowerCharacters: 'abcdefjhijklmnopqrstuvwxyz',
  upperCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numericCharacters: '0123456789',
  specialCharacters: '!@#$%^&*()[]{}/?-=+_<>~,.;:`\|"',
};

function generatePassword() {

  var randomizer = '';

  var passwordLength = prompt("Please enter desired password length:", "8-128 characters.");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length (8-128 characters.)");
  } else {
    var lowerCharacters = confirm('Use lowercase letters?')
      if (lowerCharacters) {
        randomizer += allCharacters.lowerCharacters;
      }
    var upperCharacters = confirm('Use uppercase letters?')
    if (upperCharacters) {
      randomizer += allCharacters.upperCharacters;
    }
    var numericCharacters = confirm('Use numbers?')
    if (numericCharacters) {
      randomizer += allCharacters.numericCharacters;
    }
    var specialCharacters = confirm('Use special characters?')
    if (specialCharacters) {
      randomizer += allCharacters.specialCharacters;
    }

    var password = ''; {
      for (var passwordLength = 0, passwordLength < length, passwordLength++);
      password += randomizer[Math.floor(randomAll.length * Math.random())];;
    }
  }
    return password;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
