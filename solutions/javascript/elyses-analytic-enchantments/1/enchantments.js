// Get the position (index) of the card in the given stack
export function getCardPosition(stack, card) {
    const boolValue = stack.findIndex((num) => (num === card));
  return boolValue;
}

// Determine if the stack contains the card
export function doesStackIncludeCard(stack, card) {
  const containsCard = stack.includes(card);
  return containsCard;
}


// Determine if each card is even 
export function isEachCardEven(stack) {
  const isEven = stack.every((num) => (num % 2 === 0));
  return isEven;
}


// Check if stack contains odd-value card 
export function doesStackIncludeOddCard(stack) {
  const isOdd = stack.some((num) => (num % 2 !== 0));
  return isOdd;
}

// Get the first odd card from the stack
export function getFirstOddCard(stack) {
  const firstOdd = stack.find((num) => (num % 2 !== 0));
  return firstOdd;
}


//Determine the position of the first card that is even
export function getFirstEvenCardPosition(stack) {
    const firstEvenIndex = stack.findIndex((num) => (num % 2 === 0));
    return firstEvenIndex;
}
