
/*Get the first card in the given deck*/
export function getFirstCard(deck) {
  const [ firstValue ] = deck;
  return firstValue
}


/* Get the second card in the given deck*/
export function getSecondCard(deck) {
    const [ firstValue, secondValue ] = deck;
    return secondValue;
}


/* Switch the position of the two cards */
export function swapTwoCards(deck) {
  const [ firstValue, secondValue ] = deck;
  return [secondValue, firstValue];
}

/* Rotate (shift) the position of the three cards (by one place)*/
export function shiftThreeCardsAround(deck) {
  const [ firstVal, secondVal, thirdVal ] = deck;
  return [secondVal, thirdVal, firstVal]
}

/* Grab the chosen pile from the available piles*/
export function pickNamedPile(piles) {
  const { chosen } = piles;
  return chosen;
}
/* Swap the chosen pile for the disregarded pile and the disregarded pile for the chosen pile */
export function swapNamedPile(piles) {
  const { chosen, disregarded } = piles;
  return { chosen: disregarded, disregarded : chosen}
}