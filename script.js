// Assignment code here
//Which if statement would determine the base code used or not.
var specialCase = confirm('Would you like special characters?');

function characterCountFun() {
  var userInput = prompt('How many characters do you require in your password (8-128)')
  while (isNaN(userInput) == true) {
    userInput = prompt('Not a Valid Response; Please re-enter a character count between 8 & 128')
    if (isNaN(userInput) == false) return userInput
  }
  if (isNaN(userInput) == false) {
    return userInput
  }
  //Add IF/While statement for a singular letter; Then create criteria for upper or lowercase.
  return userInput
}

//Calls Previous Function
var characterCount = characterCountFun();

function regeneratePassword() {
  //Change the variable on lines 24/31 to return the number of characters prompted for from the substring
  var charset = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@%&$.*+-/",
    returnValue = "";
  var _valueCheck = returnValue.includes(['!', '@', '%', '&', '$', '.', '*', '+', '-', '/']);
  for (var z = 0; z < charset.length; z++) {
    returnValue += charset.charAt(Math.floor(Math.random() * charset.length));
    if (_valueCheck === true) return returnValue
  }
}

function generatePassword() {
  //Change the variable on lines 24/31 to return the number of characters prompted for from the substring
  var charset = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@%&$.*+-/",
    returnValue = "";
  //Change code for IF/ELSE statement to include the criteria otherwise, generate a prompt excluding this criteria (copy/paste code from line 21)
  var _valueCheck = returnValue.includes(['!', '@', '%', '&', '$', '.', '*', '+', '-', '/']);
  for (var i = 0; i < charset.length; i++) {
    returnValue += charset.charAt(Math.floor(Math.random() * charset.length));
    if (_valueCheck == true) {
      return returnValue.substring(0, characterCount)
    }
    else {
      regeneratePassword();
      for (var y = 0; y < charset.length; y++) {
        returnValue += charset.charAt(Math.floor(Math.random() * charset.length));
        if (returnValue.length > characterCount) {
          return returnValue.substring(0, characterCount)
        }
      }
    }
  }
}

function generateRegularPassword() {
  //Change the variable on lines 24/31 to return the number of characters prompted for from the substring
  var charset = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",
    returnValue = "";
  for (var z = 0; z < characterCount; z++) {
    returnValue += charset.charAt(Math.floor(Math.random() * charset.length));
    // if (returnValue.length > characterCount) {
    //  return returnValue.substring(0, characterCount)
    //}
  }
  return returnValue.substring(0, characterCount)
}

function specialCaseFunc() {
  if (specialCase == true) {
    let createPassword = generatePassword();
    return createPassword
  }
  if (specialCase == false) {
    let createPassword = generateRegularPassword();
    return createPassword
  }
}

function useUpperLower() {

  var password = specialCaseFunc();

  function hasLowerCase() {
    let lowercaseTrue = confirm('Would you like Lowercase letters?')
    if (lowercaseTrue == false) {
      let newPassword = password.toLocaleUpperCase
      return newPassword
    }
    else {
      return password
    }
  }
  function uppercaseChange() {
    let lowercaseTrue = confirm('Would you like Uppercase letters?')
    if (lowercaseTrue == false) {
      let newPassword = password.toLocaleLowerCase
      return newPassword
    }
    else {
      return password
    }
  }

  function hasUpperCase() {
    let variableTrueFalse = password.toUpperCase() != password;
    if (variableTrueFalse == true) { return uppercaseChange(); }
  }

  function hasLowerCase() {
    return password.toUpperCase() != password;
  }

z

  function determinePassword() {
    if (hasLowerCase || hasUpperCase !== (null) || undefined) {
      let newPassword = hasLowerCase() || hasUpperCase();
      return newPassword
    }
    else {
      return password
    }
  }

  var passwordNew = determinePassword();
  return passwordNew
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //Requires special characters IF statement/ Prompt
  var password = specialCaseFunc();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);