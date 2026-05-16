// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */


export function totalBirdCount(birdsPerDay) {
    let totalBirds = 0;
    for (let i = 0; i < birdsPerDay.length; i++){
        totalBirds += birdsPerDay[i]
    }
    return totalBirds
};

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */

export function birdsInWeek(birdsPerDay, week) {
    let birdsValueSum = 0
    let dayIndex = (week - 1) * 7
    for (let i = dayIndex; i < dayIndex + 7; i ++){
        birdsValueSum += birdsPerDay[i];
    }
    return birdsValueSum
};

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
  return birdsPerDay;
}

//OR

/*
export function fixBirdCountLog(birdsPerDay) {
  let emptyArray = []; 

  for (let i = 0; i < birdsPerDay.length; i++) {
    if (i % 2 === 0) {
      let newValue = birdsPerDay[i] + 1;
      emptyArray.push(newValue);
    } else {
      emptyArray.push(birdsPerDay[i]);
    }
  } 
  
  return emptyArray;
}

*/