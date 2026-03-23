const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

// Handle button clicks
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    // CLEAR
    if (value === "C") {
      currentInput = "";
      display.textContent = "0";
      return;
    }

    // EQUAL
    if (value === "=") {
      try {
        // Replace symbols for JS evaluation
        let expression = currentInput
          .replace(/×/g, "*")
          .replace(/÷/g, "/");

        let result = eval(expression);

        // Handle division by zero
        if (result === Infinity || result === -Infinity) {
          display.textContent = "Error";
          currentInput = "";
        } else {
          display.textContent = result;
          currentInput = result.toString();
        }
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
      return;
    }

    // APPEND INPUT
    currentInput += value;
    display.textContent = currentInput;
  });
});
