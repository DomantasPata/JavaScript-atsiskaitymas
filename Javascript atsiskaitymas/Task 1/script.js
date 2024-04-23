/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

// 1. Svarus (lb) | Formulė: lb = kg * 2.2046

function kilogramsToPounds(kilogram) {
  return kilogram * 2.2046;
}

function convertKilograms(event) {
  event.preventDefault();
  let kilogram = document.getElementById("search").value;
  if (!isNaN(kilogram)) {
    let pound = kilogramsToPounds(kilogram);
    document.getElementById("output").textContent = pound + " pounds";
  } else {
    document.getElementById("output").textContent =
      "Neteisingai įvesta reikšmė";
  }
}

document
  .getElementById("submit-btn")
  .addEventListener("click", convertKilograms);

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//2. Gramus (g) | Formulė: g = kg / 0.0010000

function kilogramsToGrams(kilogram) {
  return kilogram / 0.001;
}

function convertKilograms(event) {
  event.preventDefault();
  let kilogram = document.getElementById("search").value;
  if (!isNaN(kilogram)) {
    let gram = kilogramsToGrams(kilogram);
    document.getElementById("output").textContent = gram + " grams";
  } else {
    document.getElementById("output").textContent =
      "Neteisingai įvesta reikšmė";
  }
}

document
  .getElementById("submit-btn")
  .addEventListener("click", convertKilograms);

// //-------------------------------------------------------------------------------------
// //-------------------------------------------------------------------------------------
// //3. Uncijos (oz) | Formulė: oz = kg * 35.274

function kilogramsToOunces(kilogram) {
  return kilogram * 35.274;
}

function convertKilograms(event) {
  event.preventDefault();
  let kilogram = document.getElementById("search").value;
  if (!isNaN(kilogram)) {
    let ounce = kilogramsToOunces(kilogram);
    document.getElementById("output").textContent = ounce + " ounces";
  } else {
    document.getElementById("output").textContent =
      "Neteisingai įvesta reikšmė";
  }
}

document
  .getElementById("submit-btn")
  .addEventListener("click", convertKilograms);
