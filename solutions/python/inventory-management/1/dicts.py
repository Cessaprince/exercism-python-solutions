"""Functions to keep track and alter inventory."""

def create_inventory(items):
    new_dict = dict()
    count = 1
    for item in items:
        if item in new_dict:
            new_dict[item] += 1
        else:
            new_dict[item] = count
    return new_dict

def add_items(inventory, items):
    count = 1
    for item in items:
        if item in inventory:
            inventory[item] += 1
        else:
            inventory[item] = count
    return inventory 


def decrement_items(inventory, items):
    for item in items:
        if item not in inventory:
            continue
        elif inventory[item] == 0:
            continue
        else:
            inventory[item] -= 1
    return inventory


def remove_item(inventory, item):
    if item in inventory:
        inventory.pop(item)
        return inventory
    return inventory
    
def list_inventory(inventory):
    inventory_list = []
    for item in inventory.items():
        if item[1] > 0:
            inventory_list.append(item)
        else:
            continue
    return inventory_list

    
    

