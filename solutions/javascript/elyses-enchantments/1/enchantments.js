// Retrieve a card from a stack
export function getItem(cards, position) {
  return cards[position];
}

//Exchange a card in the stack
export function setItem(cards, position, replacementCard) {
  cards[position] = replacementCard;
  return cards;
}

//Insert newCard at the end / top of the cards array
export function insertItemAtTop(cards, newCard) {
  cards[cards.length] = newCard;
  return cards;
}

//Remove a card from the stack
export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

//Remove the top card from the stack
export function removeItemFromTop(cards) {
  cards.pop();
  return cards
}

//Insert a card at the bottom of the stack
export function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

//Remove a card from the bottom of the stack
export function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

//Check the size of the stack and compare with the length of the cards
export function checkSizeOfStack(cards, stackSize) {
  return cards.length === stackSize;
};
