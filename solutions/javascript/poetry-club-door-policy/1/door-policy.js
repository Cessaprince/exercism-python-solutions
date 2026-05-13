//Get the first letter of a sentence
export function frontDoorResponse(line) {
  return line[0];
}


//Let the first letter in the word be uppercase and the rest be lowercase.
export function frontDoorPassword(word) {
  let firstWord = word[0].toUpperCase();
  let otherWords = word.slice(1).toLowerCase();
  return `${firstWord}${otherWords}`;
}

// Get the last letter of a sentence
export function backDoorResponse(line) {
  let wordStripped = line.trim();
  return wordStripped[wordStripped.length - 1]
}

// Be polite by attaching 'please' to the word with the word formatted
export function backDoorPassword(word) {
  let passWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return `${passWord}, please`
}
