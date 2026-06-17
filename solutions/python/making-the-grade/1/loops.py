"""Functions for organizing and calculating student exam scores."""


def round_scores(student_scores):
    new_list = []
    for score in student_scores:
        new_list.append(round(score))
    return sorted(new_list)


def count_failed_students(student_scores):
    count = 0
    for score in student_scores:
        if score <= 40:
            count += 1
        else:
            continue
        
    return count



def above_threshold(student_scores, threshold):
    above_threshold_arr = []
    for score in student_scores:
        if score >= threshold:
            above_threshold_arr.append(score)
        else:
            continue
    return above_threshold_arr



def letter_grades(highest):
    num_equivalent = (highest - 40)//4
    count = 1
    letter_grades = [41]
    least_val = 41
    while count < 4:
        least_val += num_equivalent
        letter_grades.append(round(least_val))
        count += 1
    return letter_grades
    


def student_ranking(student_scores, student_names):
    #using the zip() function for this
    count = 1
    rank_list = []
    for name, score in zip(student_names, student_scores):
        rank_list.append(f'{count}. {name}: {score}')
        count += 1
    return rank_list


def perfect_score(student_info):
    for student in student_info:
        if student[1] == 100:
            return student
        else:
            continue
    return []


