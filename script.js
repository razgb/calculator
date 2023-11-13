const screenInput = document.querySelector(".screen__input");
const inputButtons = document.querySelector(".inputs");
const equalSign = document.querySelector(".equal-btn");
const resetBtn = document.querySelector(".reset-btn");
const deleteBtn = document.querySelector(".delete-btn");
const multiplyBtn = document.querySelector(".multiply-btn");
const subtractBtn = document.querySelector(".subtract-btn");
const additionBtn = document.querySelector(".addition-btn");
const divisionBtn = document.querySelector(".division-btn");
const operators = ["+", "-", "x", "÷"];

inputButtons.addEventListener("click", function (e) {
  const number = e.target.closest(".number");
  if (!number) return;

  console.log(number.textContent);

  screenInput.value += number.textContent;
});

additionBtn.addEventListener("click", function () {
  screenInput.value += " + ";
});
subtractBtn.addEventListener("click", function () {
  screenInput.value += " - ";
});
multiplyBtn.addEventListener("click", function () {
  screenInput.value += " x ";
});
divisionBtn.addEventListener("click", function () {
  screenInput.value += " ÷ ";
});

deleteBtn.addEventListener("click", function () {
  const operator = screenInput.value.slice(-2, -1);

  if (operators.includes(operator)) {
    screenInput.value = screenInput.value.slice(0, -3);
  } else screenInput.value = screenInput.value.slice(0, -1);
});

resetBtn.addEventListener("click", function () {
  screenInput.value = "";
});

equalSign.addEventListener("click", function (e) {
  const screenItems = screenInput.value.split(" ");
  console.log(screenItems);

  let finalValue = 0;
  for (let i = 0; i < screenItems.length; i++) {
    // If the current value is an operator, skip current loop.
    if (!Number(screenItems[i])) continue;

    console.log(Number(screenItems[i]));
  }
});
