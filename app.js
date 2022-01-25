//select items from DOM
const numbers = document.querySelectorAll(".number"),
  clear = document.querySelector(".clear"),
  decimal = document.querySelector("#symbol"),
  operators = document.querySelectorAll(".operators"),
  calculate = document.querySelector("#result"),
  operationDisplay = document.querySelector(".first"),
  resultDisplay = document.querySelector(".second");

//clear result
clear.addEventListener("click", () => {
  operationDisplay.value = "";
});
//get operation function
const getOperator = operator => {
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
    default:
      break;
  }
}
//select numbers
numbers.forEach((number) =>
  number.addEventListener("click", (e) => {
    operationDisplay.value += number.value;
  })
);

//select decimal
decimal.addEventListener("click", (e) => {
  operationDisplay.value += e.target.value;
});

//select operators
operators.forEach((operator) =>
  operator.addEventListener("click", (e) => {
    const operator = getOperator(e.target.value)
    console.log(operator);
    operationDisplay.value += operator;
  })
);

//calculate result
calculate.addEventListener("click", (e) => {
  alert([...operationDisplay.value].indexOf('*'))
});
