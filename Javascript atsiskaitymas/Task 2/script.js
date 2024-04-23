/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("btn__element");
  const state = document.getElementById("btn__state");

  let clickCount = 0;

  state.textContent = clickCount;

  button.addEventListener("click", function () {
    clickCount++;
    state.textContent = clickCount;
  });
});
