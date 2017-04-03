
// A password obfuscator

function obfuscate(aString) {
  var splitted = aString.split("");
  var obfuscated = '';
  var tempLetter = '';
  var i = 0;
  //console.log(splitted);
  for (i = 0; i < splitted.length; i++) {
    tempLetter = splitted[i];
    if (tempLetter === 'a') {
      tempLetter = '4';
    }
    else if (tempLetter === 'e') {
      tempLetter = '3'
    }
    else if (tempLetter === 'o') {
      tempLetter = '0'
    }
    else if (tempLetter === 'l') {
      tempLetter = '1'
    }
    obfuscated = obfuscated + tempLetter;
  }
  return obfuscated;
}

var args = process.argv;

console.log(obfuscate(args[2]));