// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * @typedef {function (number, number): [number, number]} CallbackType
 */

export function translate2d(dx, dy) {

  //return the inner function which the obj passed to the outer function will take
  return function translation(x, y) {
      let changeOfX = dx + x;
      let changeOfY = dy + y;
      
      return [changeOfX, changeOfY];
  }
 
}


export function scale2d(sx, sy) {

  //return the inner function which the obj passed to the outer function will take 
  
  return function scaled(x, y) {
      let newX = sx * x;
      let newY = sy * y;
      
      return [newX, newY];
  }
 
}

export function composeTransform(f, g) {
  return function composed(x, y) {
    // 1. Get the array result from the first function
    const firstResult = f(x, y);
    
    // 2. Use simple destructuring to unpack the coordinates
    const [nextX, nextY] = firstResult;
    
    // 3. Pass the unpacked values into the second function
    return g(nextX, nextY);
  };
}


export function memoizeTransform(f) {
  
  let lastX;
  let lastY;
  let lastResult;

  return function memoiseTransformer(x, y) {
    // Check if the current inputs match the cached inputs
    if (x === lastX && y === lastY) {
      return lastResult;
    }

    // Update the cache with new inputs
    lastX = x;
    lastY = y;
    
    // Compute and cache the new result
    lastResult = f(x, y);
    return lastResult;
  }

}
