'use strict'

function solveEquation(a, b, c) {

  let res; 
  let D = Math.pow(b, 2) - 4 * a * c;
  let x1, x2;

  if (D > 0) {
    x1 = ((-b + Math.sqrt(D)) / (2 * a));
    x2 = ((-b - Math.sqrt(D)) / (2 * a));
    return res = [x1, x2];

  } else if (D == 0) {
    x1 = x2 = (-b / (2 * a));
    return res = [x1];

  } else if (D < 0) 
    return res = [];

}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
