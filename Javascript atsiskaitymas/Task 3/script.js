/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("btn");
  const output = document.getElementById("output");

  button.addEventListener("click", function () {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => {
        output.innerHTML = "";
        const message = document.getElementById("message");
        if (message) {
          message.style.display = "none";
        }
        data.forEach((users) => {
          const Div = document.createElement("div");
          Div.classList.add("post");
          const login = document.createElement("h2");
          login.textContent = users.login;
          const avatar_url = document.createElement("p");
          avatar_url.textContent = users.avatar_url;

          Div.appendChild(login);
          Div.appendChild(avatar_url);

          output.appendChild(Div);
        });
      })
      .catch((error) => {
        console.error("Klaida:", error);
      });
  });
});
