'use strict'

function solveEquation(a, b, c) {

  let res; 
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  let x1, x2;

  if (discriminant > 0) {
    x1 = ((-b + Math.sqrt(discriminant)) / (2 * a));
    x2 = ((-b - Math.sqrt(discriminant)) / (2 * a));
    return res = [x1, x2];

  } else if (discriminant == 0) {
    x1 = x2 = (-b / (2 * a));
    return res = [x1];

  } else if (discriminant < 0) 
    return res = [];

}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
