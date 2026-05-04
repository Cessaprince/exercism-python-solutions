"""Functions for calculating steps in exchanging currency."""

def exchange_money(budget, exchange_rate):
    
    #Calculate how much was gotten after exchange rate is applied to budget
    exchanged_money = budget/exchange_rate
    return exchanged_money

def get_change(budget, exchanging_value):

    #Calculate the change when exchangeable value is removed from budget
    change = budget - exchanging_value
    return change

def get_value_of_bills(denomination, number_of_bills):
    
    #Calculate the value of the bill
    bill_value = int(denomination * number_of_bills)
    return bill_value
    

def get_number_of_bills(amount, denomination):

    #Calculate the number of bills when the amount is divided by denomination (floor divison)
    number_of_bills = amount // denomination
    return number_of_bills


def get_leftover_of_bills(amount, denomination):
    
    #Calculate the remainder when the amount is divided by number of denominations
    bill_left_over = amount % denomination
    return bill_left_over


def exchangeable_value(budget, exchange_rate, spread, denomination):
    
    # Calculate the new rate with the spread added
    new_rate_value = exchange_rate + ((spread)/100 * exchange_rate)
    
    # Use new_rate_value here instead of exchange_rate to get potential value
    potential_value = budget / new_rate_value
    
    # Get the number_of_bills but using floor division and 
    # Then multiply by denomination again to get real value
    final_value = (potential_value // denomination) * denomination
    return int(final_value)
