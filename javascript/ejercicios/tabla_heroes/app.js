import superheroes from "../../superheroes.js";

let heroes = [...superheroes];

let contenedor = document.querySelector("#cuerpoTabla");
let campo = document.querySelector("#textBuscar");

//construir la tabla
const construirTabla = () => {
  contenedor.innerHTML = "";
  heroes.map((heroe, index) => {
    let tr = document.createElement("tr");
    let contenido = `
        <td>${index + 1}</td>
        <td>${heroe.superhero}</td>
        <td>${heroe.alter_ego}</td>
        <td>${heroe.first_appearance}</td>
        <td>${heroe.publisher}</td>
        `;
    tr.innerHTML = contenido;
    contenedor.appendChild(tr);
  });
};

//funcion de busqueda de nombre
const buscarNombre = () => {
  //   console.log("hola");
  heroes = superheroes.filter((heroe) => {
    return heroe.superhero.toLowerCase().includes(campo.value.toLowerCase());
  });

  construirTabla();
};

campo.addEventListener("keyup", buscarNombre);

construirTabla();
