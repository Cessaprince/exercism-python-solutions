
/* Determine the price of the pizza given the pizza and optional extras */
export function pizzaPrice(pizza, ...extras) {
    //instatiate the price variable
    let price = 0;

    //loop through every element in the extras array and update the price
    for (let i = 0; i < extras.length; i++){
        if (extras[i] === 'ExtraSauce'){
            price += 1;
        }else if (extras[i] === 'ExtraToppings'){
            price += 2;
        }
    }

    //check if the pizza is actually any of this and end the function
    if (pizza === 'Margherita'){
        price += 7; //price = price + 7
        return price;
    }else if (pizza === 'Caprese'){
        price += 9;
        return price;
    }else if (pizza === 'Formaggio'){
        price += 10;
        return price
    }

  //return the price of the pizza
    return price
}

/* Calculate the price of the total order, given individual orders*/
export function orderPrice(pizzaOrders) { 
    let totalPrice = 0; 

  //check the orders in the pizzaOrder list
    for (const order of pizzaOrders) { 

        //check the pizza property in the pizzaOrder list and update the price variable
        if (order.pizza === 'Margherita') { 
          totalPrice += 7; 
        } else if (order.pizza === 'Caprese') { 
          totalPrice += 9; 
        } else if (order.pizza === 'Formaggio'){
          totalPrice += 10;

        }

        //confirm if there's the other extras property available
        if (order.extras) { 
          //confirm the datatype as string and confirm what is the actual extra available
            if (typeof order.extras === 'string') {
                if (order.extras === 'ExtraSauce') {
                  totalPrice += 1;
                } else if (order.extras === 'ExtraToppings') {
                  totalPrice += 2;
                }

            //if the extra property gives off a list, you could iterate through it
            }else {

              //iterate through the array
                for (let indexNo = 0; indexNo < order.extras.length; indexNo++) { 
                    if (order.extras[indexNo] === 'ExtraSauce') { 
                        totalPrice += 1; 
                    } else if (order.extras[indexNo] === 'ExtraToppings') { 
                        totalPrice += 2;
                    } 
                } 
            }
        }
    } 
    
    return totalPrice; 
}

