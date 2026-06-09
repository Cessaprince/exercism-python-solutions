// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
    let count = 0;
    stack.forEach(
        (number) => {
            if (number === card) {
                count += 1; 
            }
        }
    )
    return count
}

/* Determine how many cards are odd or even*/
export function determineOddEvenCards(stack, type)  {

    //instantiate the count variable
    let count = 0;
    for (const number of stack){

      // when type is true, you are dealing with even numbers
        if (type === true) {
            if (number % 2 === 0){
                count += 1;
            }
      // when type is false, you are dealing with odd numbers
        }else{
            if (number % 2 === 1){
                count += 1;
            }
        }
    }
    return count
}

