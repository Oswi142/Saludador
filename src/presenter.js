import verificarGenero from "./verificarDatos";

const nombre = document.querySelector("#nombre");
const genre = document.querySelector("#genre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#saludo-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<p>" + verificarGenero(genre.value,nombre.value) + "</p>";
});
