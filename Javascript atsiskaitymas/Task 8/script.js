/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
  constructor() {}

  sum(num1, num2) {
    return num1 + num2;
  }
  subtraction(num1, num2) {
    return num1 - num2;
  }
  multiplication(num1, num2) {
    return num1 * num2;
  }
  division(num1, num2) {
    return num1 / num2;
  }
}

const calculator = new Calculator();

console.log("Suma:", calculator.sum(100, 20));
console.log("Skirtumas:", calculator.subtraction(100, 20));
console.log("Daugyba:", calculator.multiplication(100, 20));
console.log("Dalyba:", calculator.division(100, 20));
