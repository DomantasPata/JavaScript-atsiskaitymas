/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const output = document.getElementById("output");

  fetch("./cars.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((brand) => {
        const brandDiv = document.createElement("div");
        brandDiv.classList.add("brand");

        const name = document.createElement("h2");
        name.textContent = brand.brand;

        const modelsList = document.createElement("ul");
        brand.models.forEach((model) => {
          const modelItemLi = document.createElement("li");
          modelItemLi.textContent = model;
          modelsList.appendChild(modelItemLi);
        });

        brandDiv.appendChild(name);
        brandDiv.appendChild(modelsList);

        output.appendChild(brandDiv);
      });
    })
    .catch((error) => {
      console.error("error, error");
    });
});
