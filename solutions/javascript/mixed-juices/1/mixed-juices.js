
/* Determines how long it takes to prepare a certain juice. */


export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;

    case 'Energizer':
        return 1.5;
        
    case 'Green Garden':
        return 1.5;

    case 'Tropical Island':
        return 3;

    case 'All or Nothing':
        return 5;
        
    default:
        return 2.5;
  }
}


/* Calculates the number of limes that need to be cut to reach a certain supply. */
export function limesToCut(wedgesNeeded, limes) {
    let limeCount = 0;
    let wedgesCount = 0;
    
    for (const val of limes) {
        if (wedgesCount >= wedgesNeeded) {
            break; 
        } else {
            switch (val) {
                case 'small':
                    wedgesCount += 6;
                    break;
          
                case 'medium':
                    wedgesCount += 8;
                    break;
                    
                case 'large':
                    wedgesCount += 10;
                    break;
            }
            limeCount += 1;
        }
    }
    
    return limeCount;
}

/* Determines which juices still need to be prepared after the end of the shift. */
export function remainingOrders(timeLeft, orders) {
    let timeUsed = 0; //6.5 
    let orderIndex = 0; //2
    
    for (const order of orders) {
        if (timeUsed >= timeLeft) {
            break;
        }else{
            timeUsed += timeToMixJuice(order);
            orderIndex += 1
        }
    }
    
    return orders.slice(orderIndex); 
 
}
