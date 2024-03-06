'use strict';
$(document).ready(function () {
  const btnSubmit = document.getElementById('btn__submit');
  btnSubmit.onclick = calculate;
});

function calculate() {
  let firstNumber = document.getElementById('firstNumber').value;
  let secondNumber = document.getElementById('secondNumber').value;
  let operation = document.getElementById('operation').value;

  let result;
  switch (operation) {
    case 'addition':
      result = parseInt(firstNumber) + parseInt(secondNumber);
      break;
    case 'substract':
      result = firstNumber - secondNumber;
      break;
    case 'multiply':
      result = firstNumber * secondNumber;
      break;
    case 'divide':
      result = firstNumber / secondNumber;
      break;
  }

  document.getElementById('result').value = result;
}
