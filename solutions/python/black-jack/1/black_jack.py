"""Functions to help play and score a game of blackjack."""

face_cards = ['J', 'K', 'Q']

def value_of_card(card):
    """
    Determine the scoring value of a card.

    :param card: str - given card.
    :return: int - value of a given card.  See below for values.

    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 1
    3.  '2' - '10' = numerical value.
    """

    
    if card.upper() == 'A':
        return 1
    elif card.upper() in face_cards:
        return 10
    else:
        numerical_value = int(card)
        return numerical_value
        
 

def higher_card(card_one, card_two):

    #Checlks which card between both cards returns a higher value
    
    if value_of_card(card_one) > value_of_card(card_two):
        return card_one
    elif value_of_card(card_one) < value_of_card(card_two):
        return card_two
    elif value_of_card(card_one) == value_of_card(card_two):
        return (card_one, card_two)
    
    


def value_of_ace(card_one, card_two): 
    
    """Calculate the most advantageous value for an upcoming ace card. 
    :param card_one, card_two: str - card dealt. 
    See below for values. 
    :return: int - either 1 or 11 value of the upcoming ace card. 
    1. 'J', 'Q', or 'K' (otherwise known as "face cards") = 10 
    2. 'A' (ace card) = 11 (if already in hand) 3. '2' - '10' = numerical value. """ 

    
    if card_one.upper() == 'A':
        val1 = 11 
    else:
        val1 = value_of_card(card_one)

        
    if card_two.upper() == 'A':
        val2 = 11
    else:
        val2 = value_of_card(card_two)

    
    new_value = val1 + val2
    
    if new_value + 11 <= 21: 
        return 11 
    else: 
        return 1

    
        



def is_blackjack(card_one, card_two):

    """
    Determine if the hand is a 'natural' or 'blackjack'.

    :param card_one, card_two: str - card dealt. See below for values.
    :return: bool - is the hand is a blackjack (two cards worth 21).

    1.  'J', 'Q', or 'K' (otherwise known as "face cards") = 10
    2.  'A' (ace card) = 11 (if already in hand)
    3.  '2' - '10' = numerical value.
    """
    
    ten_cards = ['10', 'J', 'Q', 'K']
    
    if card_one.upper() == 'A' and card_two.upper() in ten_cards:
        return True
    elif card_two.upper() == 'A' and card_one.upper() in ten_cards:
        return True
        
    else:
        return False




def can_split_pairs(card_one, card_two):
    """Determine if a player can split their hand into two hands.

    :param card_one, card_two: str - cards dealt.
    :return: bool - can the hand be split into two pairs? (i.e. cards are of the same value).
    """

    if value_of_card(card_one) == value_of_card(card_two):
        return True
    else:
        return False


card_points = [9, 10, 11]

def can_double_down(card_one, card_two):
    
    """Determine if a blackjack player can place a double down bet.

    :param card_one, card_two: str - first and second cards in hand.
    :return: bool - can the hand can be doubled down? (i.e. totals 9, 10 or 11 points).
    """
    sum_of_card_value = value_of_card(card_one) + value_of_card(card_two)

    if sum_of_card_value in card_points:
        return True
    else:
        return False
    
