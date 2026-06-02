/ * Calculates the sum of the two input arrays. * /
export function twoSum(array1, array2) {
    const firstDigit = Number(array1.join(''));
    const secondDigit = Number(array2.join(''));
    return firstDigit + secondDigit;
}

/ * Checks whether a number is a palindrome. * / 
export function luckyNumber(value) {
  const valueAsString = value.toString();
  const reversedString = [...valueAsString].reverse().join('');
  if (valueAsString === reversedString) {
      return true;
  }
  return false
}


/ * Determines the error message that should be shown to the user * /

export function errorMessage(input) {
    if (input === '' || input === null || input === undefined){
        return 'Required field';
    }else if (Number(input)) {
        return '';
    }
    return 'Must be a number besides 0';
}

