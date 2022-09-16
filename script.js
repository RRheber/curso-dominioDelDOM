const h1 = document.querySelector("h1"); // seleccion por nombre
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const boton = document.querySelector("#calculo");
const result = document.querySelector("#resultado");
const form = document.querySelector("#form");

form.addEventListener("submit", sumarValores);

function sumarValores(event) {
  event.preventDefault();
  const suma = parseInt(input1.value) + parseInt(input2.value);
  result.innerText = "La suma es: " + suma;
}

// boton.addEventListener("click", btnOnClick);

// function btnOnClick() {
//   const suma = parseInt(input1.value) + parseInt(input2.value);
//   result.innerText = "La suma es: " + suma;
// }
// //<!--Escuchar lo que cambia en el imput onchange=""-->
// //<!--Escuchar el click de un elemento onclick="btnOnClick()"-->
