"use strict"

// Задача №1

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr;
  }

  if (d === 0) {
    arr.push(-b / (2 * a));
    return arr;
  }

  if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
    return arr;
  }
}

// Задача №2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }
  
  let P = percent / 100 / 12;
  let S = amount - contribution;

  if (S <= 0) {
    return 0; 
  }

  let monthlyPayment = S * (P + P / (Math.pow(1 + P, countMonths) - 1));
  let totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}