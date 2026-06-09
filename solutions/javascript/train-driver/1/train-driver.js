
/* Return each wagon's id in form of an array.*/
export function getListOfWagons(...vals) {
    return vals
};



/* Reorder the array of wagons by moving the first 2 wagons to the end of the array. */
export function fixListOfWagons(ids) {
  const [ first, second, ...theRest ] = ids;
  const newArr = [...theRest, first, second];
  return newArr;
}

/* Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID. */
export function correctListOfWagons(ids, missingWagons) {
  const [ firstId, ...otherIds ] = ids;
  const newLargeArr = [firstId, ...missingWagons, ...otherIds];
  return newLargeArr
}

/* Extend route information by adding another object */
export function extendRouteInformation(information, additional) {
  const dict = {...information, ...additional};
  return dict;
}

/* Separate arrival time from the route information object */
export function separateTimeOfArrival(information) {
  const { timeOfArrival, ...otherInfo } = information;
  return [timeOfArrival, otherInfo];
}
