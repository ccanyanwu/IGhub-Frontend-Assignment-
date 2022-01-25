//select items from DOM
const numbers = document.querySelectorAll(".number"),
  clear = document.querySelector(".clear"),
  decimal = document.querySelector("#symbol"),
  operators = document.querySelectorAll(".operators"),
  calculate = document.querySelector("#result"),
  operationDisplay = document.querySelector(".first"),
  resultDisplay = document.querySelector(".second");

//clear display
clear.addEventListener("click", () => (operationDisplay.value = ""));

//get symbols
const getOperator = (operator) => {
  switch (operator) {
    case "-":
      return "-";
      break;
    case "+":
      return "+";
      break;
    case "/":
      return "/";
      break;
    case "x":
      return "*";
      break;
    case ".":
      return ".";
      break;
    default:
      break;
  }
};

//select numbers
numbers.forEach((number) =>
  number.addEventListener("click", (e) => {
    operationDisplay.value += number.value;
  })
);

//select decimal
decimal.addEventListener(
  "click",
  (e) => (operationDisplay.value += getOperator(e.target.value))
);

//select operators
operators.forEach((operator) =>
  operator.addEventListener(
    "click",
    (e) => (operationDisplay.value += getOperator(e.target.value))
  )
);

//calculate & display result
calculate.addEventListener("click", (e) => {
  const result = eval(operationDisplay.value);

  //check if result is a float or interger
  resultDisplay.textContent =
    Number(result) === result && result % 1 !== 0 ? result.toFixed(2) : result;
});
