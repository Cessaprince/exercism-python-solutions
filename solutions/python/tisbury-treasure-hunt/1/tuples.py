"""Functions to help Azara and Rui locate pirate treasure."""


def get_coordinate(record):
    return record[1]
    
def convert_coordinate(coordinate):
   return tuple(coordinate)
   


def compare_records(azara_record, rui_record):
    if tuple(azara_record[1]) == rui_record[1]:
        return True
    return False


def create_record(azara_record, rui_record):
    if tuple(azara_record[1]) == rui_record[1]:
        return azara_record + rui_record
    return 'not a match'
    

def clean_up(combined_record_group):
    writeup = """"""
    
    for record in combined_record_group:
        new_record = list(record)
        empty = []
        for i in range(0, len(new_record)):
            if i == 1:
                continue
            else:
                empty.append(new_record[i])
        
        writeup += f'{tuple(empty)}\n'
        
    return writeup
