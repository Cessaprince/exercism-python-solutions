

import { notify } from './notifier';
import { order } from './grocer';


export function onSuccess() {
  // implement the onSuccess callback to call notify with a success message
  return notify({"message": "SUCCESS"})
}

export function onError() {
  // implement the onError callback to call notify with an error message
  return notify({ message: 'ERROR' })
}


export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  // implement the orderFromGrocer function to order the query
 
  return order({variety: query.variety, quantity: query.quantity}, 
               onSuccessCallback, 
               onErrorCallback)
}


export function postOrder(variety, quantity) {
  //implement the postOrder function to create a query and order
  return order({variety, quantity}, onSuccess, onError)
}
