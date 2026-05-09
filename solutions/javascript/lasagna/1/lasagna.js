
/*💡 You're allowed to completely clear a stub before you get started. Often
  we recommend using the stub, because they are already set-up correctly to
  work with the tests, which you can find in ./lasagna.spec.js
  Good luck preparing some lasagna!
*/ 

//preparation minutes for each layer
const PREPARATION_MINUTES_PER_LAYER = 2;

//the expected minutes in oven variable
export const EXPECTED_MINUTES_IN_OVEN = 40

//the remaining minutes for the lasagna to be in the oven function
export function remainingMinutesInOven(actualMinutesInOven) {
  return (EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven);
}

// the preparation time (in minutes) function
export function preparationTimeInMinutes(numberOfLayers) {
  return (PREPARATION_MINUTES_PER_LAYER * numberOfLayers);
}

//the total time (in minutes) function 
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return (preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven);
}
