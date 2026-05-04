"""Functions for implementing the rules of the classic arcade game Pac-Man."""


def eat_ghost(power_pellet_active, touching_ghost):

    """ Returns True if Pac-Man has a power pellet active and is also touching a ghost. """
    if power_pellet_active is True and touching_ghost is True:
        return True
    else:
        return False

def score(touching_power_pellet, touching_dot):
    if touching_power_pellet is True or touching_dot is True:
        return True
    else:
        return False

def lose(power_pellet_active, touching_ghost):
    if power_pellet_active is not True and touching_ghost is True:
        return True
    else:
        return False
        

def win(has_eaten_all_dots, power_pellet_active, touching_ghost):
    """Return True that is if you do not lose and then pac-man has eaten all the dots."""
    
    #instatiate the 'lose' variable
    lose = False

    #change the 'lose' variable to True that is if the conditions met for loss is met.
    if (power_pellet_active is not True and touching_ghost is True):

        #'lose' becomes True
        lose = True

    #set the condition for winning for if the pac_man has eaten all dots
    if has_eaten_all_dots is True and not lose:
        return True

    #set the condition for when the pac_man as has not eaten all dots
    else:
        return False
    

