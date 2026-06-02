"""Functions for tracking poker hands and assorted card tasks."""

#Takes current round number and returns a single list with num and the next two 
def get_rounds(number):
    num_list = [number]
    count = 1
    while count <= 2:
        num_list.append(number + count)
        count += 1
        
    return num_list

    
#joins rounds1 and rounds 2 together
def concatenate_rounds(rounds_1, rounds_2):
   new_list = rounds_1 + rounds_2
   return new_list


#checks if the number is in the rounds list
def list_contains_round(rounds, number):
    if number in rounds:
        return True
    return False
    

#finds the average of cards in hand
def card_average(hand):
    count = 0
    num_total = 0
    for num in hand:
        num_total += num
        count += 1
        
    return (num_total/count)

#checks if avg of 1st and last and the middle alone equals actual average
def approx_average_is_average(hand):
    first_second_avg = (hand[0] + hand[len(hand)-1])/2
    middle_val = hand[round(len(hand)/2)]
    main_avg = sum(hand)/len(hand)

    """Return True if either one or both of the, above named
    strategies result in a number equal to the actual average."""
    
    if first_second_avg == main_avg or middle_val == main_avg:
        return True
    return False


#returns a Boolean indicating if the average of the cards at even indexes is the same as the average of the cards at odd indexes.
def average_even_is_average_odd(hand):
    even_avg = sum(hand[::2])/len(hand[::2])
    odd_avg = sum(hand[1::2])/len(hand[1::2])
    
    if even_avg == odd_avg:
        return True
    return False


#hat takes a hand and checks if the last card is a Jack (11). If the last card is a Jack (11), double its value before returning the hand.
def maybe_double_last(hand):
    if hand[-1] == 11:
        hand[-1] = hand[-1] * 2
        return hand
    return hand
