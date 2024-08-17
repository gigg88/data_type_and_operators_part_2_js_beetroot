//User input:
//Use prompt function to ask the user for the first number and store it in num1.
//Convert the user input to a number using parseFloat or parseInt to handle potential string input.
//Repeat the process for obtaining the second number (num2).

let continueCalculation = true;

let num1;
let num2;
let operator;

//Operation selection:
//Use a while loop to keep prompting the user until a valid operation is chosen.
//Inside the loop, use prompt to ask the user to choose an operation (+, -, *, /).
//Use a switch statement or a series of if statements to check the chosen operation.

// Get the first number and validate
while (continueCalculation) {

while (true) {
  num1 = +prompt("Choose Number 1");
  if (!isNaN(num1)) {
    break;
  } else {
    alert("Invalid input. Please enter numbers only.");
  }
}

// Get the second number and validate

while (true) {
  num2 = +prompt("Choose Number 2");
  if (!isNaN(num2)) {
    break;
  } else {
    alert("Invalid input. Please enter numbers only.");
  }
}

// Choose Operator

while (true) {
  operator = prompt("Choose Operator (+, -, *, /)");
  switch (operator) {
    case '+':
    case '-':
    case '*':
    case '/':
      break;
    default:
      alert("Invalid operator. Choose again");
      continue;
  }
  break;
}

// Depending on the chosen operation, perform the calculation using appropriate arithmetic
// operators and store the result in a new variable (e.g., let result).

// Calculation with chosen operator

let result;
switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;  
  case '/':
    if (num2 === 0 || num1 === 0) {
      alert("Division by zero is not allowed!");
    } else {
      result = num1 / num2;
    }
    break;
  default:
    alert("An error occurred.");
}

// Alerting result

alert(`The result is: ${result}`);

// Asking for another calculation

const choice = prompt("Another Calculation ? (yes / no )");
continueCalculating = choice.toLowerCase() === "yes";
}

//Error handling:
//If the user chooses division (/) and num2 is zero, display an error message indicating "Division by zero is not allowed!".
//If the user enters a non-numeric value for either number, display an error message indicating “Invalid input. Please enter numbers only.”
//Output: If no errors occur, use console.log to display the final result in the format "The result is: [result]".
