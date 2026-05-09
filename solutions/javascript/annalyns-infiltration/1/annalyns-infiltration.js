

// a fast attack can be made if the knight is sleeping, as it takes time for him to get his armor on, so he will be vulnerable.

export function canExecuteFastAttack(knightIsAwake) {
  if (knightIsAwake === true){
    return false
  }else{
    return true
  };
}

// the group can be spied upon if at least one of them is awake. Otherwise, spying is a waste of time.

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  if (knightIsAwake === false && archerIsAwake === false && prisonerIsAwake === false){
    return false
  }else{
    return true
  };
}

//the prisoner can be signalled if the prisoner is awake and the archer is sleeping. archer must be sleeping

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (prisonerIsAwake === true && archerIsAwake === false){
    return true
  }else{
    return false
  };
}


/**
 * Free Prisoner Logic:
 * 1. With Dog: Possible if the Archer is asleep (Knight is scared of the dog).
 * 2. Without Dog: Possible only if the Prisoner is awake AND both guards are asleep.
 * Otherwise, the rescue fails.
 */

//Pattern One 
export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  if (petDogIsPresent === true && archerIsAwake === false){
    return true
  }else if (petDogIsPresent === false){
    if (knightIsAwake === false && archerIsAwake === false){
      if (prisonerIsAwake === true){
        return true
      }else{
        return false
      }
    }
  }return false; /* Here, anyone that runs as False, will return this. 
                  No need for else in each block. 
                  Its for code readability                  
                  */
} 



//pattern 2: Used if each block should have their own else

/*

export function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
  if (petDogIsPresent === true && archerIsAwake === false) {
    return true;
  } else if (petDogIsPresent === true && archerIsAwake === true) {
    return false; // Path 1: Dog is here, but Archer is awake
  } else if (petDogIsPresent === false) {
    if (knightIsAwake === false && archerIsAwake === false) {
      if (prisonerIsAwake === true) {
        return true;
      } else {
        return false; // Path 2: No dog, guards asleep, but prisoner asleep
      }
    } else {
      return false; // Path 3: No dog, but a guard is awake
    }
  } else {
    return false; // Path 4: A catch-all just in case
  }
}
*/