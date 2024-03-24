# PHASE-1WEEK-CODE-CHALLENGE

#### Date, 2024/03/24

#### By *James W. Mbugua

## Description
### Student Grade Generator
This JavaScript program calculates and displays student grades based on their marks entered by the user.
#### Usage
Save the code as a JavaScript file
Open a terminal or command prompt and navigate to the directory where you saved the file.
Run the program using Node.js:
The program will prompt you to enter the student's marks. Enter a valid number between 0 and 100.
The program will then display the calculated grade for the entered marks.

### Speed Detector
This program calculates the demerit points associated with a car's speed based on a set speed limit.
#### Usage
It validates the input to ensure it's a non-negative number.
It calculates the speed difference by subtracting the speed limit (usually 70 km/h) from the car's speed.
If the speed difference is less than or equal to zero (car is at or below the limit), it displays "Ok".
Otherwise, it calculates the demerit points by dividing the speed difference by 5 (since 1 point per 5 km/h) and rounding up the result using Math.ceil (or alternative methods discussed previously).
Finally, it checks if the demerit points are greater than the threshold (e.g., 12). If so, it displays "License suspended". Otherwise, it displays the number of demerit points incurred ("Points: X").

### Net Salary Calculator
This JavaScript program calculates the net salary of an employee in Kenya, considering various deductions and contributions. 
#### Usage
Calculate gross salary by adding basic salary and benefits.
Determine taxable pay by subtracting personal relief from gross salary.
Calculate PAYE based on tax brackets and rates applied to the taxable pay.
Use helper functions to determine deductions:
        -NHIF deduction based on predefined tiers of gross salary.
        -NSSF deduction considering Tier I and II limits, which vary depending on the month (February 2024 onwards vs. before).
        -Housing levy as a fixed percentage of gross salary (combined employer and employee contribution).
Calculate net salary by subtracting all deductions (PAYE, NHIF, NSSF, Housing Levy) from the gross salary.

## Process
write the code as a JavaScript file
Open a terminal or command prompt and navigate to the directory where you saved the file
Run the program using Node.js/in the console

## Language Used
Javascript
HTML

## Technologies used
HTML
CSS
Github
Javascript
