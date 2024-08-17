JavaScript Home Assignments

Based on the example from the previous lesson, you can work directly in the browser or create separate HTML/JavaScript files – choose the option that is more convenient for you. 
Mini-Calculator (without HTML & CSS)

Description:

This assignment focuses on building a simple calculator application purely using JavaScript. It will provide practice with operators and user input handling.

Functionality:

    The calculator accepts two numbers from the user as input.
    It offers functionalities for addition, subtraction, multiplication, and division through user prompts.
    Error handling is included to prevent division by zero and handle invalid inputs (non-numeric values).

Steps:

    Variable declaration: Declare variables to store the two numbers entered by the user (e.g., let num1, let num2).
    User input:
        Use prompt function to ask the user for the first number and store it in num1.
        Convert the user input to a number using parseFloat or parseInt to handle potential string input.
        Repeat the process for obtaining the second number (num2).
    Operation selection:
        Use a while loop to keep prompting the user until a valid operation is chosen.
        Inside the loop, use prompt to ask the user to choose an operation (+, -, *, /).
        Use a switch statement or a series of if statements to check the chosen operation.
    Calculation:
        Depending on the chosen operation, perform the calculation using appropriate arithmetic operators and store the result in a new variable (e.g., let result).
    Error handling:
        If the user chooses division (/) and num2 is zero, display an error message indicating "Division by zero is not allowed!".
        If the user enters a non-numeric value for either number, display an error message indicating “Invalid input. Please enter numbers only.”
    Output: If no errors occur, use console.log to display the final result in the format "The result is: [result]".
