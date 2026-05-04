"""Functions to prevent a nuclear meltdown."""


def is_criticality_balanced(temperature, neutrons_emitted):

    """Check if the reactor is balanced in criticality"""

    #returns True if temperature < 800 and neutrons/s > 500 and product < 5000
    product = temperature * neutrons_emitted
    if temperature < 800 and neutrons_emitted > 500 and product< 500000:
        return True
        
    else:
        return False


def reactor_efficiency(voltage, current, theoretical_max_power):
    """Access reactor efficiency zone."""
    percentage_value = ((voltage * current) / theoretical_max_power) * 100

    #green -> efficiency of 80% or more
    if percentage_value >= 80:
        return 'green'

    #orange -> efficiency of less than 80% but at least 60%
    elif 60 <= percentage_value < 80:
        return 'orange'

    #red -> efficiency below 60%, but still 30% or more
    elif 30 <= percentage_value < 60:
        return 'red'

    #black ->  less than 30% efficient
    else:
        return 'black'
    

def fail_safe(temperature, neutrons_produced_per_second, threshold):
    # Calculate the criticality of the system first 
    value = temperature * neutrons_produced_per_second
    
    # 'LOW' -> value < 90% of threshold
    if value < (0.9 * threshold): 
        return 'LOW'
    
    # 'NORMAL' -> value +/- 10% of threshold
    elif (0.9 * threshold) <= value <= (1.1 * threshold): 
        return 'NORMAL'
    
    # 'DANGER' -> value is not in the above-stated ranges
    else: 
        return 'DANGER'

